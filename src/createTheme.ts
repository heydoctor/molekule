import { DefaultTheme } from 'styled-components';
import { ThemeVariants } from './types/ThemeVariants';
import { defaultThemeColors } from './defaultThemeColors';
import { ThemeBreakpoints } from './types/ThemeBreakpoints';
import { ButtonVariants } from './types/ButtonVariants';
import { BadgeVariants } from './types/BadgeVariants';
import { defaultThemeSizes } from './defaultThemeSizes';

export const createTheme = (customTheme?: DefaultTheme): DefaultTheme => {
  const colors = Object.assign(defaultThemeColors, customTheme?.colors);

  const buttonVariants: ButtonVariants = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.primaryLight,
      },
      '&:active': {
        backgroundColor: colors.primaryDark,
      },
      '&:disabled': {
        backgroundColor: colors.primaryLightest,
      },
    },
    primaryText: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: colors.primary,
      '&:hover': {
        color: colors.primaryDark,
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      borderColor: colors.primary,
      color: colors.primary,
      '&:hover': {
        backgroundColor: colors.primary,
        color: colors.white,
      },
      '&:active': {
        backgroundColor: colors.primaryDark,
        color: colors.white,
      },
      '&:disabled': {
        borderColor: colors.primaryLightest,
        color: colors.primaryLightest,
      },
    },
    grey: {
      backgroundColor: colors.white,
      borderColor: colors.grey,
      color: colors.greyDarkest,
      '&:hover': {
        borderColor: colors.greyDark,
      },
      '&:active': {
        backgroundColor: colors.greyLight,
      },
      '&:disabled': {
        borderColor: colors.grey,
        color: colors.grey,
      },
    },
    greyText: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: colors.grey,
      '&:hover': {
        color: colors.greyDark,
      },
    },
    success: {
      color: colors.white,
      backgroundColor: colors.secondary,
      '&:hover': {
        backgroundColor: colors.secondaryLight,
      },
      '&:active': {
        backgroundColor: colors.secondaryDark,
      },
      '&:disabled': {
        backgroundColor: colors.secondaryLightest,
      },
    },
    warning: {
      backgroundColor: colors.orange,
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.orangeLight,
      },
      '&:active': {
        backgroundColor: colors.orangeDark,
      },
      '&:disabled': {
        backgroundColor: colors.orangeLightest,
      },
    },
    danger: {
      backgroundColor: colors.red,
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.redLight,
      },
      '&:active': {
        backgroundColor: colors.redDark,
      },
      '&:disabled': {
        backgroundColor: colors.redLightest,
      },
    },
    info: {
      backgroundColor: colors.blue,
      color: colors.white,
    },
  };

  const badgeVariants: BadgeVariants = {
    primary: {
      backgroundColor: colors.primaryLightest,
      color: colors.primaryDark,
    },
    success: {
      backgroundColor: colors.greenLightest,
      color: colors.greenDark,
    },
    danger: {
      backgroundColor: colors.redLightest,
      color: colors.redDark,
    },
    warning: {
      backgroundColor: colors.orangeLightest,
      color: colors.orangeDark,
    },
    info: {
      backgroundColor: colors.blueLightest,
      color: colors.blueDark,
    },
    grey: {
      backgroundColor: colors.greyLight,
      color: colors.greyDarker,
    },
  };

  const alertVariants = badgeVariants;

  const defaultBreakpoints: ThemeBreakpoints = ['400px', '600px', '900px', '1200px', '1500px'];
  const breakpoints = customTheme?.breakpoints || defaultBreakpoints;
  /* eslint-disable prefer-destructuring */
  breakpoints.xs = breakpoints[0];
  breakpoints.sm = breakpoints[1];
  breakpoints.md = breakpoints[2];
  breakpoints.lg = breakpoints[3];
  breakpoints.xl = breakpoints[4];
  /* eslint-enable prefer-destructuring */

  const variants: ThemeVariants = {
    Alert: alertVariants,
    Badge: badgeVariants,
    Button: buttonVariants,
  };

  return {
    classPrefix: 're',
    colors,
    space: [0, 4, 8, 16, 24, 32, 64, 126, 256],

    breakpoints,
    gridWidth: 1200,
    gridGutter: 16,
    gridColumns: 12,

    radii: [0, 2, 4, 8],
    radius: 8,

    shadow: {
      soft: '0px 2px 16px rgba(27, 32, 43, 0.1)',
      hard: '0px 0px 16px rgba(44, 53, 71, 0.2)',
    },

    typography: {
      fontSize: 16,
      color: colors.black,
      bodyFontFamily: 'Avenir',
      headerFontFamily: 'Tiempos',
    },

    sizes: defaultThemeSizes,

    variants,
  };
};
