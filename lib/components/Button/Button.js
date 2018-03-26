import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { space, themeGet } from 'styled-system';
import { getLuminance } from 'polished';

const spin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}`;

const Button = styled.button`
  font-family: inherit;
  font-smoothing: antialiased;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  textDecoration: none;
  appearance: none;

  ${themeGet('components.Button')};

  ${({ variant = 'primary', size = 'md', outline = false, block = false, rounded = true, disabled = false, theme }) => {
    const mainColor = theme.colors[variant] || theme.colors[theme.variants[variant]];
    const elementSize = theme.sizes[size];
    const luminance = getLuminance(mainColor);
    const fontColor = luminance < 0.5 ? 'white' : 'black';

    return `
      pointer-events: ${disabled ? 'none' : 'auto'};
      opacity: ${disabled ? '0.65' : '1'};
      color: ${outline ? mainColor : fontColor};
      font-size: ${elementSize / 3}px;
      padding: ${elementSize / 4}px ${elementSize / 2}px;
      background: ${outline ? 'transparent' : mainColor};
      border: 1px solid ${mainColor};
      width: ${block ? '100%' : 'auto'};
      border-radius: ${rounded ? theme.radius : 0}px;
    `;
  }}

  ${props => {
    if (props.loading) {
      return `
        color: transparent !important;
        pointer-events: none;
        position: relative;
        text-index: -9999px;
        opacity: 0.75;

        &::after {
          display: block;
          content: "";
          border-color: white;
          animation: ${spin} 820ms infinite linear;
          border-width: .2rem;
          border-style: solid;
          border-radius: .8rem;
          border-right-color: transparent;
          border-top-color: transparent;
          height: 1.2rem;
          left: 50%;
          margin-left: -.6rem;
          margin-top: -.6rem;
          position: absolute;
          top: 48%;
          width: 1.2rem;
        }
      `;
    }
    return '';
  }}

  ${space}
`;

Button.displayName = 'Button';
Button.propTypes = {
  variant: PropTypes.string,
};

Button.Group = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default Button;
