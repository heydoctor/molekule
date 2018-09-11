import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Field from './Field';
import StyledLabel from './Label';
import FormError from './FormError';
import { createComponent } from '../utils';

const InputContainer = createComponent({
  name: 'InputContainer',
}).extend`
  position: relative;
`;

const StyledInput = createComponent({
  name: 'Input',
  tag: 'input',
}).extend`
  ${({ isFloating, size, theme, borderRadius = theme.radius }) => css`
    border: 1px solid ${theme.colors.grayLight};
    height: ${theme.heights[size]}px;
    display: block;
    outline: none;
    width: 100%;
    padding: 8px;
    border-radius: ${borderRadius}px;
    transition: 250ms all;
    -webkit-appearance: none;
    font-family: inherit;
    font-size: ${theme.fontSizes[size]}px;

    &:hover,
    &:focus,
    &:active {
      border-color: ${theme.colors.grayMid};
    }

    ::placeholder {
      color: ${theme.colors.grayMid};
    }

    &[disabled] {
      opacity: 0.65;
    }

    ${isFloating &&
      css`
        padding-bottom: 0;
      `};
  `};
`;

const StyledTextArea = StyledInput.withComponent('textarea');

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

    this.input = React.createRef();
    this.state = {
      value: props.value || '',
      focused: false,
    };
  }

  componentDidMount() {
    if (this.props.autogrow) {
      this.createShadowElement();
      this.autogrow();
    }

    if (this.props.autofocus) {
      if (this.input.current) {
        this.input.current.focus();
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

  focus() {
    this.input.current.focus();
  }

  blur() {
    this.input.current.blur();
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
      placeholder,
      transformOnBlur,
      size,
      ...rest
    } = this.props;

    const isFloating = (floating && value && value.length > 0) || (floating && this.state.value);

    const inputProps = {
      ...rest,
      id,
      innerRef: this.input,
      size,
      value: this.state.value,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      style: autogrow ? { ...style, height: this.state.height } : style,
      placeholder,
      isFloatable: floating,
      isFloating,
    };

    const Label = (
      <StyledLabel htmlFor={id} styles={rest.styles} size={size} isFloatable={floating} isFloating={isFloating}>
        {label}
      </StyledLabel>
    );

    return (
      <Field styles={rest.styles}>
        {!floating && Label}

        <InputContainer styles={rest.styles}>
          {floating && Label}

          {multiline ? <StyledTextArea {...inputProps} /> : <StyledInput {...inputProps} />}
        </InputContainer>

        {!this.state.focused && error ? <FormError styles={rest.styles}>{error}</FormError> : null}
      </Field>
    );
  }
}
