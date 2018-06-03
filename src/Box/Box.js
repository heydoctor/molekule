import styled from 'styled-components';
import {
  display,
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  alignSelf,
  flex,
} from 'styled-system';

const Box = styled.div`
  ${display}
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${width}
  ${alignSelf}
  ${flex}
`;

Box.propTypes = {
  ...display.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...alignSelf.propTypes,
  ...flex.propTypes,
}

export default Box;
