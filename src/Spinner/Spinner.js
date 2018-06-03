import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

const spin = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;

export default styled.div`
  ${({ size = 15 }) => css`
    height: ${size}px;
    width: ${size}px;
    border: ${size / 10}px solid ${p => rgba(p.theme.colors.primary, 0.3)};
  `};

  border-right-color: ${p => p.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.1s infinite linear;
`;
