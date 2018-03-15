import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
} from 'styled-system';

console.log(display);

const Box = styled.div`
  ${display}
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${width}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${flex}
  ${alignSelf}
`;

export default Box;
