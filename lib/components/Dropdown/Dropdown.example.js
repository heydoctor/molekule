import React from 'react';
import Block from '../Block';
import Button from '../Button';
import Dropdown from './Dropdown';
import LiveEdit from '../../live-edit';

const DropdownCode = `<Dropdown
  trigger={<Button variant="success">Open Dropdown</Button>}
  render={({ close }) => (
    <React.Fragment>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Body>
        <Dropdown.Title>Section One</Dropdown.Title>
        <Dropdown.Item>Item One</Dropdown.Item>
        <Dropdown.Item>Item Two</Dropdown.Item>

        <Dropdown.Title>Section Two</Dropdown.Title>
        <Dropdown.Item onClick={close}>Item One</Dropdown.Item>
        <Dropdown.Item disabled>Item Two</Dropdown.Item>
      </Dropdown.Body>
      <Dropdown.Footer>Footer</Dropdown.Footer>
    </React.Fragment>
  )}
/>
`;

const DropdownDemo = props => (
  <Dropdown
    {...props}
    trigger={<Button>{props.triggerCopy}</Button>}
    render={({ close }) => (
      <React.Fragment>
        <Dropdown.Header>Header</Dropdown.Header>
        <Dropdown.Body>
          <Dropdown.Title>Section One</Dropdown.Title>
          <Dropdown.Item>Item One</Dropdown.Item>
          <Dropdown.Item>Item Two</Dropdown.Item>
        </Dropdown.Body>
        <Dropdown.Footer>Footer</Dropdown.Footer>
      </React.Fragment>
    )}
  />
);

export default {
  group: 'Dropdown',
  render: () => (
    <React.Fragment>
      <p>Easily display contextual overlays using custom trigger elements.</p>

      <LiveEdit code={DropdownCode} scope={{ Dropdown, Button }} />

      <h2>Positioning</h2>
      <p>
        Use the <code>position</code> prop to position the dropdown menu around the trigger element. Valid values are{' '}
        <code>tl</code>, <code>tr</code>, <code>br</code>, and <code>tl</code>. Defaults to <code>bl</code>
      </p>
      <Block mt={3} display="flex" justify="space-around">
        <Block>
          <DropdownDemo position="bl" triggerCopy="Bottom Left" />
        </Block>
        <Block>
          <DropdownDemo position="tl" triggerCopy="Top Left" />
        </Block>
        <Block>
          <DropdownDemo position="tr" triggerCopy="Top Right" />
        </Block>
        <Block>
          <DropdownDemo position="bl" triggerCopy="Bottom Left" />
        </Block>
      </Block>
    </React.Fragment>
  ),
};
