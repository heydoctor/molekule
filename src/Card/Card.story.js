import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Basic', () => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>This is the body of the card</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
));
