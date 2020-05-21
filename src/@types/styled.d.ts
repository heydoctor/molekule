// import original module declarations
import 'styled-components';
import { ThemeColors, ThemeBreakpoints, ThemeTypography, ThemeSizes, ThemeVariants } from 'src/types';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    classPrefix: string;
    space: number[];
    gridWidth: number;
    gridGutter: number;
    gridColumns: number;
    radii: number[];
    radius: number;
    shadow: {
      soft: string;
      hard: string;
    };
    colors: ThemeColors;
    breakpoints: ThemeBreakpoints;
    typography: ThemeTypography;
    sizes: ThemeSizes;
    variants: ThemeVariants;
  }
}
