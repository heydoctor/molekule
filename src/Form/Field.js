import { createComponent } from '../utils';

const Field = createComponent({
  name: 'Field',
}).extend`
  position: relative;
  transition: 175ms;

  & + & {
    margin-top: 1rem;
  }
`;

export default Field;
