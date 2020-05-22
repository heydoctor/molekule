import PropTypes from 'prop-types';
import { css, DefaultTheme, StyledComponent } from 'styled-components';
import { createComponent } from '../utils';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

type IconType = StyledComponent<'i', DefaultTheme, IconProps, never> & { getClassName: (name: string) => string };

const Icon: IconType = Object.assign(
  createComponent<IconProps, 'i'>({
    name: 'Icon',
    tag: 'i',
    props: ({ name }) => ({
      className: Icon.getClassName(name),
    }),
    style: ({ theme, size, color, disabled, onClick }: any) => {
      const colorFromTheme = theme.colors[color];
      const resolvedColor = colorFromTheme || color;

      return css`
        color: ${resolvedColor || 'inherit'};
        font-size: ${size ? `${size}px` : 'inherit'};

        ${disabled &&
          css`
            pointer-events: none;
            opacity: 0.65;
          `};

        ${onClick &&
          css`
            cursor: pointer;
          `}
      `;
    },
  }),
  {
    propTypes: {
      name: PropTypes.string.isRequired,
      size: PropTypes.number,
      color: PropTypes.string,
      onClick: PropTypes.func,
    },
    iconPrefix: 'mdi',
    getClassName: (name: string) => `${Icon.iconPrefix} ${Icon.iconPrefix}-${name}`,
  }
);

export default Icon;
