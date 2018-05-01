import React from 'react';
import Button from './Button';
import LiveEdit from '../live-edit';

export default {
  group: 'Button',
  render: () => (
    <React.Fragment>
      <p>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. We include several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>

      <div>
        <Button.Group>
          <Button>Primary Button</Button>
          <Button outline>Outline Button</Button>
        </Button.Group>
      </div>

      <h2>Groups</h2>
      <p>Button groups provide an easy way to horizontally layout a row of buttons.</p>
      <LiveEdit code={`<Button.Group>
  <Button>One</Button>
  <Button>Two</Button>
  <Button outline>Three</Button>
</Button.Group>`} scope={{ Button }}></LiveEdit>

      <h2>Variants</h2>
      <p>Buttons can come in several different shapes and colors.</p>

      <h3>Colors</h3>
      <p>Use the <code>variant</code> prop for predefined button variants. More colors may be added to <code>theme.colors</code> if the defaults are not enough or need to be overridden.</p>

      <LiveEdit code={`<Button.Group>
  <Button variant="success">I'm Successful</Button>
  <Button variant="danger">I'm Dangerous</Button>
</Button.Group>`} scope={{ Button }} />

      <h3>Sizes</h3>
      <p>Use the <code>size</code> prop to change the size of your button.</p>
      <LiveEdit code={`<Button.Group>
  <Button size="sm">I'm small</Button>
  <Button>I'm normal</Button>
  <Button size="lg">I'm Large</Button>
</Button.Group>`} scope={{ Button }} />


      <h2>States</h2>

      <h3>Disabled</h3>
      <p>Add the <code>disabled</code> prop for disabled button state style.</p>
      <LiveEdit code={`<Button disabled>I'm disabled</Button>`} scope={{ Button }} />

      <h3>Loading</h3>
      <p>Add the <code>loading</code> prop for loading button state style.</p>
      <LiveEdit code={`<Button loading>I'm loading</Button>`} scope={{ Button }} />
    </React.Fragment>
  )
}
