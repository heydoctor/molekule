import React from 'react';
import { mountWithTheme } from '../../../test/utils';
import Tabs from './Tabs';

const TabContent = ({ body }) => <div>This is the content for Tab {body}</div>;
const onActiveSpy = jest.fn();
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
    onActive: onActiveSpy,
  },
];

describe('<Tabs />', () => {
  afterEach(() => {
    onActiveSpy.mockClear();
  });

  test('renders', () => {
    const component = mountWithTheme(<Tabs tabs={TABS} />);

    expect(component).toMatchSnapshot();
  });

  test('fires tab.onActive', () => {
    const component = mountWithTheme(<Tabs tabs={TABS} />);

    component.find('button#test-two').simulate('click');

    expect(onActiveSpy).toHaveBeenCalled();
  });

  test('fires Tabs.onChange when controlled', () => {
    const onChangeSpy = jest.fn();
    const component = mountWithTheme(<Tabs tabs={TABS} onChange={onChangeSpy} />);
    component.find('button#test-two').simulate('click');
    expect(onChangeSpy).toHaveBeenCalled();
    expect(onChangeSpy).toHaveBeenCalledWith(1);
  });
});
