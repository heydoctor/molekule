import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import DEFAULT_THEME from '../theme';

const ThemeProvider = props => {
  const theme = merge(DEFAULT_THEME, props.theme);

  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
};

export default ThemeProvider;
