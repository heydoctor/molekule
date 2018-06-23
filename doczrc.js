import { babel } from 'docz-plugin-babel6';

export default {
  base: '/refractal',
  title: 'Refractal',
  description: 'React UI Framework based on styled-components and styled-system',
  port: 1234,
  wrapper: 'docs/wrapper.js',
  propsParser: true,
  plugins: [babel()],
};
