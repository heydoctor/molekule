import React from 'react';
import { compose, space, color, typography } from 'styled-system';
import { createComponent } from '../utils';

interface TextProps {}

const StyledText = createComponent<TextProps, 'span'>({
  name: 'Text',
  tag: 'span',
  style: compose(space, color, typography),
});

export const Text = React.forwardRef<any, any>((props, ref) => <StyledText {...props} ref={ref} />);
