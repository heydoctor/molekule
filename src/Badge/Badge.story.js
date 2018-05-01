import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('Badge', module)
  .add('Basic', () => (
    <div>
      <Badge>Badge</Badge>
    </div>
  ))
  .add('Variants', () => (
    <div>
      <Badge variant="info">Badge</Badge>
      <Badge variant="success">Badge</Badge>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Badge size="sm">Badge</Badge>
      <Badge ml>Badge</Badge>
      <Badge size="lg" ml>Badge</Badge>
    </div>
  ))
