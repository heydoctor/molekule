import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import { getComponentVariant, getComponentSize, createComponent } from '../utils';
import Flex from '../Flex';
import Icon from '../Icon';

const ButtonGroup = createComponent({
  name: 'ButtonGroup',
  as: Flex,
  style: ({
    vertical = false,
    theme: { radius, breakpoints },
    borderRadius = radius || 2,
    connected = false,
  }: any) => css`
    & > button:not(:first-child) {
      margin-left: 1rem;
    }

    ${connected &&
      css`
        & > button:not(:first-child) {
          margin-left: 0;
        }
        & > button:first-child {
          border-radius: ${borderRadius}px 0 0 ${borderRadius}px;
        }
        & > button:last-child {
          border-radius: 0 ${borderRadius}px ${borderRadius}px 0;
        }

        & > :not(:first-child):not(:last-child) {
          border-radius: 0;
        }
      `}

    ${vertical && verticalCss({ breakpoints, vertical, borderRadius })};
  `,
});

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
}`;

const loadingCss = (height: number, color: string) => css`
  color: transparent !important;
  pointer-events: none;
  position: relative;
  text-index: -9999px;
  opacity: 0.75;

  &::after {
    display: block;
    content: '';
    animation: ${spinKeyframes} 820ms infinite linear;
    border-radius: 100%;
    border: 2px solid ${color};
    border-right-color: transparent;
    border-top-color: transparent;
    left: 50%;
    margin-left: -${height * 0.25}px;
    margin-top: -${height * 0.25}px;
    position: absolute;
    top: 48%;
    height: ${height * 0.5}px;
    width: ${height * 0.5}px;
  }
`;

export interface ButtonProps {
  variant?: string;
  size?: string;
  outline?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: string;
  leftIconProps?: any;
  rightIcon?: string;
  rightIconProps?: any;
  hasText?: any;
  colorFocus?: any;
  isLoading?: boolean;
}

const StyledButton = createComponent<ButtonProps, 'button'>({
  name: 'Button',
  tag: 'button',
  style: ({
    hasText,
    leftIcon,
    rightIcon,
    variant,
    size,
    theme,
    block,
    disabled,
    isLoading,
    borderRadius = theme.radius,
    colorFocus = theme.colors.colorFocus,
  }: any) => {
    const variantStyles = getComponentVariant(theme, 'Button', variant);
    const sizeStyles = getComponentSize(theme, 'Button', size);

    return css`
      position: relative;
      display: inline-flex;
      cursor: pointer;
      text-transform: capitalize;
      text-align: center;
      text-decoration: none;
      font-family: inherit;
      font-weight: bold;
      appearance: none;
      border-radius: ${borderRadius}px;
      pointer-events: ${disabled ? 'none' : 'auto'};
      width: ${block ? '100%' : 'auto'};
      border: 1px solid transparent;
      transition: 175ms;
      white-space: nowrap;
      user-select: none;
      outline: none;
      justify-content: center;
      align-items: center;

      &:before {
        transition: opacity 250ms;
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        z-index: 0;
        opacity: 0;
        border: 4px solid ${colorFocus};
        border-radius: ${borderRadius + 4}px;
      }

      ${leftIcon &&
        hasText &&
        css`
          i {
            padding-right: 4px;
          }
        `}

      ${rightIcon &&
        hasText &&
        css`
          i {
            padding-left: 4px;
          }
        `}

      &[disabled] {
        pointer-events: none;
        opacity: 0.75;
      }

      &:focus {
        &:before {
          opacity: 1;
        }
      }

      ${isLoading && loadingCss(sizeStyles.height, variantStyles.color)};
      ${variantStyles}
      ${sizeStyles};
      ${space};
    `;
  },
});

const renderIcon = (icon: any, props: any) => <Icon name={icon} {...props} />;

/** Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. We include several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. */
export const Button = React.forwardRef<any, ButtonProps>(
  ({ children, leftIcon, leftIconProps, rightIcon, rightIconProps, colorFocus, loading, ...rest }, ref) => (
    <StyledButton
      ref={ref}
      hasText={!!children}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      colorFocus={colorFocus}
      isLoading={loading}
      {...rest}>
      {leftIcon && renderIcon(leftIcon, leftIconProps)}
      {children}
      {rightIcon && renderIcon(rightIcon, rightIconProps)}
    </StyledButton>
  )
) as ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<ButtonProps>> & {
  Group: typeof ButtonGroup;
}; // Need hacky typing so we can set Group to the object.

Button.Group = ButtonGroup;

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  outline: false,
  block: false,
  disabled: false,
  loading: false,
};

const verticalCss = ({ breakpoints, vertical, borderRadius }: any) => {
  const maybeNumber = parseInt(vertical, 10);
  const fallback = breakpoints[vertical] || breakpoints.sm;
  const breakpoint = Number.isInteger(maybeNumber) ? `${maybeNumber}px` : fallback;

  return css`
    @media (max-width: ${breakpoint}) {
      flex-direction: column;

      &&& {
        & > button {
          border-radius: ${borderRadius}px;
          margin-right: 0;
        }
      }

      & > button:not(:first-child) {
        margin: 1rem 0 0;
      }
    }
  `;
};
