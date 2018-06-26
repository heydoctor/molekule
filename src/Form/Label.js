import styled from 'styled-components';

const Label = styled.label`
  display: block;
  transition: 250ms;
  font-weight: 500;
  margin: 0 0 4px 4px;
  z-index: 10;
  font-size: ${p => p.theme.fontSizes[p.size]}px;

  ${props =>
    props.isFloatable &&
    `
      position: absolute;
      top: 2px;
      left: 6px;
      opacity: ${props.isFloating ? 1 : 0};
      margin: 0;
      font-size: ${props.theme.fontSizes[props.size] * 0.8}px;
    `};
`;

export default Label;
