import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  position,
  background,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';
import { createComponent } from '../utils';

interface BoxProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BackgroundProps {}

const Box = createComponent<BoxProps>({
  name: 'Box',
  style: compose(space, color, typography, layout, flexbox, position, background),
});

export default Box;
