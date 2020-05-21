import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash/merge';
import { createTheme } from '../createTheme';

const ThemeProvider = props => {
  const theme = merge(createTheme(props.theme), props.theme);

  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
};

export default ThemeProvider;
