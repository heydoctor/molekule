import styled from 'styled-components';

const Card = styled.div`
  background: white;
  box-shadow: 0 8px 30px rgba(0, 29, 54, 0.1);
  border-radius: 2px;
`;

Card.Header = styled.div`
  padding: 1rem;
`;

Card.Body = styled.div`
  padding: 1rem;
`;

Card.Footer = styled.div`
  padding: 1rem;
  background: ${p => p.theme.colors.grayLight};
`;

export default Card;
