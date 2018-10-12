import React from 'react';
import { mountWithTheme } from '../../test/utils';
import Card from './Card';

test('Card', () => {
  const component = mountWithTheme(
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );

  expect(component).toMatchSnapshot();
});
