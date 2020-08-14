import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash/merge';
import { createTheme } from '../createTheme';

export const ThemeProvider = (props: any) => {
  const theme = merge(createTheme(props.theme), props.theme);

  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
};
