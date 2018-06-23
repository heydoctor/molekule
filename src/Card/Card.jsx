import styled, { css } from 'styled-components';
import { space, borderRadius, themeGet } from 'styled-system';

const Card = styled.div`
  ${({
    shadow,
  }) => {
    return css`
      background: white;
      box-shadow: ${themeGet('shadow', shadow || '0 8px 30px rgba(0, 29, 54, 0.1)')};
    `
  }}

  ${borderRadius};
`;

Card.Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${themeGet('colors.grayLight')};

  ${space}
`;

Card.Body = styled.div`
  padding: 1rem;

  ${space}
`;

Card.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${themeGet('colors.grayLight')};

  ${space}
`;

export default Card;
