import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import { getDefaultBadgeVariants } from './defaultBadgeVariants';
import { getDefaultButtonVariants } from './defaultButtonVariants';

type ThemeLike<T> = {
  [K in keyof DefaultTheme]: K extends keyof T ? T[K] : DefaultTheme[K];
};

export const createTheme = <T extends Partial<ThemeLike<T>>>(customTheme: T = {} as T) => {
  const colors = {
    ...defaultTheme.colors,
    ...customTheme?.colors,
  } as {
    [K in keyof DefaultTheme['colors']]: K extends keyof T['colors'] ? T['colors'][K] : DefaultTheme['colors'][K];
  };

  return {
    ...defaultTheme,
    colors,
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...customTheme?.breakpoints,
    },
    typography: {
      ...defaultTheme.typography,
      color: colors.black,
    },
    variants: {
      Alert: getDefaultBadgeVariants(colors as Record<string, string>),
      Badge: getDefaultBadgeVariants(colors as Record<string, string>),
      Button: getDefaultButtonVariants(colors as Record<string, string>),
    },
  };
};
