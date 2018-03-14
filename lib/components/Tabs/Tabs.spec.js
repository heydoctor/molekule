import React from 'react';
import { mountWithTheme } from '../../../test/utils';
import Tabs from './Tabs';

const TabContent = ({ body }) => <div>This is the content for Tab {body}</div>;

const TABS = [
  {
    id: 'test-one',
    title: 'Tab One',
    content: <TabContent body="one" />,
  },
  {
    id: 'test-two',
    title: 'Tab Two',
    content: <TabContent body="two" />,
  },
];

test('Card', () => {
  const component = mountWithTheme(<Tabs tabs={TABS} />);

  expect(component).toMatchSnapshot();
});
