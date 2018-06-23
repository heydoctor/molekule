import styled from 'styled-components';
import { space } from 'styled-system';
import { lighten, darken, getLuminance } from 'polished';

const FONT_SIZES = {
  sm: 8,
  md: 10,
  lg: 12,
};

const Badge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${({ variant = 'primary', size = 'md', theme }) => {
    const ogColor = theme.colors[variant] || theme.colors[theme.variants[variant]];
    const luminance = getLuminance(ogColor);
    const bgColor = lighten(0.25, ogColor);
    const fontColor = luminance < 0.1 ? '#ffffff' : darken(0.3, ogColor);
    const fontSize = FONT_SIZES[size];

    return `
      padding: ${fontSize / 4}px ${fontSize / 2}px;
      font-size: ${fontSize}px;
      font-family: ${theme.typography.fontFamily};
      border-radius: ${theme.radius}px;
      background: ${bgColor};
      color: ${fontColor};
    `;
  }};

  ${space};
`;

export default Badge;
