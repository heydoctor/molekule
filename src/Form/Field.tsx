import { css } from 'styled-components';
import { createComponent } from '../utils';

export const Field = createComponent({
  name: 'Field',
  style: css`
    position: relative;
    transition: 175ms;

    & + & {
      margin-top: 1rem;
    }
  `,
});
