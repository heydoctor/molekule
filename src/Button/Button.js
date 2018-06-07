import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { space, borderRadius, height, fontSize, themeGet } from 'styled-system';
import { getLuminance } from 'polished';

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
}`;

const loadingCss = height => css`
  color: transparent !important;
  pointer-events: none;
  position: relative;
  text-index: -9999px;
  opacity: 0.75;

  &::after {
    display: block;
    content: '';
    border-color: white;
    animation: ${spinKeyframes} 820ms infinite linear;
    border-width: ${height / 12}px;
    border-style: solid;
    border-radius: 100%;
    border-right-color: transparent;
    border-top-color: transparent;
    height: ${height / 2}px;
    left: 50%;
    margin-left: -${height / 4}px;
    margin-top: -${height / 4}px;
    position: absolute;
    top: 48%;
    width: ${height / 2}px;
  }
`;

const Button = styled.button`
  ${({
    variant = 'primary',
    size = 'md',
    theme,
    outline = false,
    block = false,
    disabled = false,
    loading = false,
    transparent = false,
    height = theme.heights[size],
    backgroundColor = theme.colors[variant] || theme.colors[theme.variants[variant]],
    fontColor = getLuminance(backgroundColor) < 0.5 ? 'white' : 'black',
    fontSize = theme.fontSizes[size],
  }) => css`
    font-family: inherit;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    appearance: none;
    border-radius: ${theme.elementRadius || '2px'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    opacity: ${disabled ? '0.65' : '1'};
    color: ${outline ? backgroundColor : fontColor};
    height: ${height}px;
    padding: 0 ${height / 2}px;
    font-size: ${fontSize}px;
    width: ${block ? '100%' : 'auto'};
    background: ${outline || transparent ? 'transparent' : backgroundColor};
    border: ${transparent ? 'none' : `1px solid ${backgroundColor}`};

    ${loading ? loadingCss(height) : ''} ${themeGet('components.Button')};
  `};
  ${space};
  ${borderRadius};
  ${fontSize};
  ${height};
`;

Button.displayName = 'Button';
Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  ...space.propTypes,
  ...borderRadius.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
};

Button.Group = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default Button;
