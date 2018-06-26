import styled from 'styled-components';

const FormError = styled.span`
  display: block;
  margin: 4px 0 0 4px;
  color: ${p => p.theme.colors.red};
  font-size: 10px;
`;

export default FormError;
