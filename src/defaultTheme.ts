import { defaultThemeColors } from './defaultThemeColors';
import { defaultBreakpoints } from './defaultBreakpoints';
import { defaultThemeSizes } from './defaultThemeSizes';

export const defaultTheme = {
  classPrefix: 're',
  colors: defaultThemeColors,
  space: [0, 4, 8, 16, 24, 32, 64, 126, 256] as const,

  breakpoints: defaultBreakpoints,
  gridWidth: 1200 as const,
  gridGutter: 16 as const,
  gridColumns: 12 as const,

  radii: [0, 2, 4, 8] as const,
  radius: 8 as const,

  shadow: {
    soft: '0px 2px 16px rgba(27, 32, 43, 0.1)',
    hard: '0px 0px 16px rgba(44, 53, 71, 0.2)',
  } as const,

  typography: {
    fontSize: 16,
    color: defaultThemeColors.black,
    bodyFontFamily: 'Avenir',
    headerFontFamily: 'Tiempos',
  } as const,

  sizes: defaultThemeSizes,
} as const;
