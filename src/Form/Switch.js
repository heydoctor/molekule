import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SwitchInput = styled.input`
  display: none;
`;

const SwitchContain = styled.label`
  position: relative;
  display: inline-block;
  width: ${p => p.size * 2}px;
  height: ${p => p.size + p.inset}px;
`;

const SwitchThumb = styled.span`
  ${({
    variant,
    size,
    inset,
    on,
    theme,
    backgroundColor = theme.colors[variant] || theme.colors[theme.variants[variant]],
  }) => css`
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
    background-color: ${on ? backgroundColor : theme.colors.grayMid};

    &:before {
      border-radius: 100%;
      position: absolute;
      content: '';
      height: ${size}px;
      width: ${size}px;
      left: ${inset / 2}px;
      bottom: ${inset / 2}px;
      background-color: white;
      transition: 0.3s;
      ${on &&
        css`
          transform: translateX(${size - inset}px);
        `};
    }
  `};
`;

class Switch extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    size: PropTypes.number,
    inset: PropTypes.number,
    variant: PropTypes.string,
  };

  static defaultProps = {
    variant: 'primary',
    size: 16,
    inset: 8,
  };

  state = {
    on: this.props.value || false,
  };

  componentDidUpdate(prevProps) {
    // update switch state based on props passed in
    if ('value' in this.props) {
      if (this.props.value !== this.state.on && this.props.value !== prevProps.value) {
        this.update(this.props);
      }
    }
  }

  update(newProps) {
    this.setState({ on: newProps.value });
  }

  handleChange = () => {
    const { onChange, name } = this.props;
    const { on } = this.state;

    this.setState({ on: !on }, () => {
      // only pass an update if onChange is defined
      if (typeof onChange === 'function') {
        this.props.onChange(name, this.state.on);
      }
    });
  };

  render() {
    const { id, name, size, variant, inset } = this.props;
    const { on } = this.state;

    return (
      <SwitchContain size={size} inset={inset}>
        <SwitchInput id={id} name={name} type="checkbox" on={on} onChange={this.handleChange} />
        <SwitchThumb variant={variant} size={size} on={on} inset={inset} />
      </SwitchContain>
    );
  }
}

export default Switch;