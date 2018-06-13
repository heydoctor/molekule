import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { lighten, darken, getLuminance } from 'polished';

const Alert = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0;
  font-size: 14px;

  a {
    color: inherit;
  }

  ${({ variant = 'primary', theme }) => {
    const ogColor = theme.colors[variant] || theme.colors[theme.variants[variant]];
    const bgColor = lighten(0.24, ogColor);
    const fontColor = darken(0.3, ogColor);

    return css`
      font-family: ${theme.typography.fontFamily || 'inherit'};
      border-radius: ${theme.radius}px;
      background: ${bgColor};
      color: ${fontColor};
    `;
  }};

  ${space};
`;

Alert.propTypes = {
  variant: PropTypes.string,
  theme: PropTypes.shape(),
};

export default Alert;
