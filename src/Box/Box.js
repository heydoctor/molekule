import styled from 'styled-components';
import {
  display,
  space,
  color,
  height,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  alignSelf,
  justifySelf,
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
  ${height}
  ${width}
  ${flex}
  ${alignSelf}
  ${justifySelf}
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
  ...flex.propTypes,
  ...alignSelf.propTypes,
  ...justifySelf.propTypes,
};

export default Box;
