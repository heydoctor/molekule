import React from 'react';
import { capitalize } from 'lodash';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import FormError from '../Form/FormError';
import Flex from '../Flex';

const CheckboxContainer = styled.label`
  position: relative;
  margin-bottom: 0;
  cursor: pointer;

  & + & {
    margin-left: ${p => (p.horizontal ? '8px' : 0)};
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledIcon = styled(Icon)`
  ${({ variant = 'primary', theme, fill = theme.colors[variant] || theme.colors[theme.variants[variant]] }) => css`
    fill: ${p => (p.checked ? fill : p.theme.colors.grayMid)};
  `};
`;

const StyledLabel = styled(Flex)`
  margin-left: 4px;
  font-size: ${p => p.fontSize}px;
`;

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.value,
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
    iconOn: PropTypes.string,
    iconOff: PropTypes.string,
    iconSize: PropTypes.number,
    fontSize: PropTypes.number,
    variant: PropTypes.string,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    value: false,
    variant: 'primary',
    iconOn: 'checkbox-marked',
    iconOff: 'checkbox-blank-outline',
    iconSize: 18,
    horizontal: false,
    onChange() {},
  };

  componentDidUpdate(prevProps) {
    // update checked state based on props passed in
    if ('value' in this.props) {
      if (this.props.value !== this.state.checked && this.props.value !== prevProps.value) {
        this.update(this.props);
      }
    }
  }

  update(newProps) {
    this.setState({ checked: newProps.value });
  }

  handleChange = () => {
    const { onChange, name, value } = this.props;
    const { checked } = this.state;

    // if value component is being controlled via parent
    if (value) return;

    this.setState({ checked: !checked }, () => {
      // only pass an update if onChange is defined
      if (typeof onChange === 'function') {
        this.props.onChange(name, checked);
      }
    });
  };

  render() {
    const { label, id, error, name, fontSize, iconOn, iconOff, iconSize, variant, horizontal } = this.props;
    const { checked } = this.state;

    return (
      <CheckboxContainer horizontal={horizontal}>
        <StyledInput id={id} name={name} type="checkbox" checked={checked} onChange={this.handleChange} />
        <Flex alignItems="center">
          <StyledIcon size={iconSize} variant={variant} checked={checked} name={checked ? iconOn : iconOff} />

          {label && <StyledLabel fontSize={fontSize}>{label}</StyledLabel>}
        </Flex>
        {!this.state.focused && error ? <FormError>{capitalize(error)}</FormError> : null}
      </CheckboxContainer>
    );
  }
}
