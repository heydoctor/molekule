import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OpenStyles = {
  bl: `
    transform: scale(1);
  `,
  b: `
    transform: translateX(-50%) scale(1);
  `,
  br: `
    transform: scale(1);
  `,
  tl: `
    transform: scale(1);
  `,
  t: `
    transform: translateX(-50%) scale(1);
  `,
  tr: `
    transform: scale(1);
  `,
};

const PositionStyles = {
  bl: `
    left: 0;
    transform: translateX(0) scale(0.9);
    transform-origin: 0 0;
    top: calc(100% + 8px);
  `,
  br: `
    left: auto;
    right: 0;
    top: calc(100% + 8px);
    transform: translateX(0) scale(0.9);
    transform-origin: 100% 0;
  `,
  tl: `
    left: 0;
    bottom: calc(100% + 8px);
    transform: translateX(0) scale(0.9);
    transform-origin: 0 0;
  `,
  tr: `
    left: auto;
    right: 0;
    bottom: calc(100% + 8px);
    transform: translateX(0) scale(0.9);
    transform-origin: 100% 0;
  `,
};

const getDropdownMenuStyles = props => `
  ${PositionStyles[props.position]}
  ${props.open &&
    `
    opacity: 1;
    visibility: visible;

    ${OpenStyles[props.position]};
  `}
`;

const DropdownProvider = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;
`;

const DropdownMenu = styled.div`
  position: absolute;
  left: 50%;
  background: white;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) scale(0.9);
  transform-origin: 50% 0;
  transition: all 300ms cubic-bezier(0.325, 0.09, 0, 1.28);
  border: 1px solid #e4edf5;
  box-shadow: 0 0 20px 0 rgba(178, 194, 212, 0.3);
  min-width: 150px;
  width: ${p => `${p.width || 150}px`};
  ${getDropdownMenuStyles};
`;

export default class Dropdown extends React.Component {
  static propTypes = {
    trigger: PropTypes.element,
    render: PropTypes.func,
    autoclose: PropTypes.bool,
    position: PropTypes.string,
  };

  static defaultProps = {
    autoclose: true,
    position: 'bl',
  };

  static childContextTypes = {
    dropdown: PropTypes.object,
  };

  state = {
    isOpen: false,
  };

  getChildContext() {
    return {
      dropdown: {
        close: this.close.bind(this),
        open: this.open.bind(this),
      },
    };
  }

  componentWillUnmount() {
    this.detachAutocloseListener();
  }

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  close = () => {
    this.setState(
      {
        isOpen: false,
      },
      this.detachAutocloseListener
    );
  };

  open = () => {
    this.setState(
      {
        isOpen: true,
      },
      this.attachAutocloseListener
    );
  };

  attachAutocloseListener() {
    if (!this.props.autoclose) {
      return;
    }
    document.addEventListener('click', this.autoclose);
  }

  detachAutocloseListener() {
    document.removeEventListener('click', this.autoclose);
  }

  autoclose = e => {
    if (!this.root || !this.root.contains(e.target)) {
      this.close();
    }
  };

  render() {
    const { position, width, trigger, render } = this.props;
    const { isOpen } = this.state;

    return (
      <DropdownProvider
        innerRef={ref => {
          this.root = ref;
        }}>
        <div onClick={this.toggle} ariaHaspopup="true" ariaExpanded={isOpen}>
          {trigger}
        </div>

        <DropdownMenu open={isOpen} position={position} width={width}>
          {render({
            close: this.close,
          })}
        </DropdownMenu>
      </DropdownProvider>
    );
  }
}

Dropdown.Header = styled.div`
  padding: 8px 12px;
  background: ${p => p.theme.colors.grayLight};
  font-weight: bold;
  font-size: 12px;
  color: ${p => p.theme.colors.grayMid};
  text-transform: uppercase;
`;

Dropdown.Body = styled.div`
  padding: 12px;
`;

Dropdown.Title = styled.h3`
  display: block;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  margin: 0 0 4px;
`;

Dropdown.Item = styled.div`
  opacity: ${p => (p.disabled ? 0.75 : 1)};
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  margin-left: -12px;
  margin-right: -12px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;

  & + ${Dropdown.Title} {
    margin-top: 12px;
  }

  &:hover {
    color: inherit;
  }
`;

Dropdown.Footer = styled.footer`
  background: #f9fafc;
  padding: 12px;
  border-radius: 0 0 7px 7px;
  border-top: 1px solid #e9e9e9;
  font-size: 14px;
`;
