import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';

export const mountWithTheme = (children, options) => {
  const wrapper = mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
  const instance = wrapper.instance();
  return wrapper.mount({ context: instance.getChildContext() }).children();
};
