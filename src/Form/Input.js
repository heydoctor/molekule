import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Field from './Field';
import Label from './Label';
import FormError from './FormError';

const StyledInput = styled.input`
  ${({ isFloating, isFloatable, size, theme }) => css`
    background: ${theme.colors.grayLight};
    border: 0;
    height: ${theme.heights[size]}px;
    display: block;
    outline: none;
    width: 100%;
    padding: 0.5rem;
    border-radius: 2px;
    transition: 250ms all;
    -webkit-appearance: none;
    font-family: inherit;
    font-size: ${theme.fontSizes[size]}px;

    ::placeholder {
      color: ${theme.colors.grayMid};
    }

    ${isFloatable &&
      css`
        background: transparent;
        position: absolute;
        bottom: ${isFloating ? -3 : 0}px;
      `};
  `};
`;

const StyledTextArea = StyledInput.withComponent('textarea');

const FormInputContainer = styled.div`
  ${p =>
    p.isFloatable &&
    css`
      position: relative;
      height: ${p.theme.heights[p.size]}px;
      background: ${p.theme.colors.grayLight};
    `};
`;

export default class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    minRows: PropTypes.number,
    rows: PropTypes.number,
    maxRows: PropTypes.number,
    rowHeight: PropTypes.number,
    autogrow: PropTypes.bool,
    size: PropTypes.string,
    floating: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
    multiline: false,
    minRows: 2,
    rows: 3,
    maxRows: 6,
    rowHeight: 14 * 1.5,
    autogrow: false,
    disabled: false,
    size: 'md',
    onFocus() {},
    onBlur() {},
    onChange() {},
    floating: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      focused: false,
    };
  }

  componentDidMount() {
    if (this.props.autogrow) {
      this.createShadowElement();
      this.autogrow();
      if (this.props.autofocus) {
        setTimeout(() => {
          this.input.focus();
        }, 150);
      }
    }
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.autogrow();
    }
  }

  componentWillUnmount() {
    if (this.shadow) {
      this.shadow.remove();
    }
  }

  getInput = () => this.input;

  onFocus = e => {
    this.setState({ focused: true });
    this.props.onFocus(e.target.name);
  };

  onBlur = e => {
    this.setState({ focused: false });

    const { onBlur, onChange, transformOnBlur } = this.props;

    onBlur(e.target.name);

    const currentValue = this.props.value;
    if (transformOnBlur && currentValue) {
      const transformedValue = transformOnBlur(currentValue);
      if (transformedValue !== currentValue) {
        onChange(e.target.name, transformedValue);
      }
    }
  };

  onChange = e => {
    this.autogrow();
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.name, e.target.value);
  };

  createShadowElement() {
    this.shadow = document.createElement('textarea');
    this.shadow.style.position = 'absolute';
    this.shadow.style.left = '-9000px';
    document.body.append(this.shadow);
  }

  autogrow() {
    const { multiline, autogrow, minRows, maxRows, rowHeight } = this.props;
    if (!multiline || !autogrow) {
      return;
    }

    const minHeight = minRows * rowHeight;
    const maxHeight = maxRows * rowHeight;

    this.shadow.style.width = `${this.input.clientWidth}px`;
    this.shadow.value = this.props.value || this.state.value;
    let height = this.shadow.scrollHeight + 14;
    if (height < minHeight) {
      height = minHeight;
    } else if (height > maxHeight) {
      height = maxHeight;
    }

    this.setState({ height });
  }

  render() {
    const {
      className,
      style,
      minRows,
      maxRows,
      rowHeight,
      label,
      multiline,
      autogrow,
      autofocus,
      id,
      error,
      value,
      floating,
      placeholder = label,
      transformOnBlur,
      size,
      ...rest
    } = this.props;

    const isFloating = (floating && value && value.length > 0) || (floating && this.state.value);

    const inputProps = {
      ...rest,
      ref: node => {
        this.input = node;
      },
      id,
      value: this.state.value,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      style: autogrow ? { ...style, height: this.state.height } : style,
      placeholder,
    };

    return (
      <Field>
        <FormInputContainer size={size} isFloatable={floating}>
          {label && (
            <Label size={size} isFloatable={floating} isFloating={isFloating}>
              {label}
            </Label>
          )}

          {multiline ? (
            <StyledTextArea size={size} {...inputProps} />
          ) : (
            <StyledInput size={size} isFloatable={floating} isFloating={isFloating} {...inputProps} />
          )}
        </FormInputContainer>

        {!this.state.focused && error ? <FormError>{error}</FormError> : null}
      </Field>
    );
  }
}
