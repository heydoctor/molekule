import React from 'react';
import Switch from '../Form/Switch';
import LiveEdit from '../live-edit';

export default {
  group: 'Switch',
  render: () => (
    <React.Fragment>
      <p>Switch Component. Different sizes are available by passing the size prop.</p>

      <LiveEdit code={`<Switch size="xs" name="switch2" id="switch2" />`} scope={{ Switch }} />
      <LiveEdit code={`<Switch value={true} name="switch1" id="switch1" />`} scope={{ Switch }} />
      <LiveEdit code={`<Switch size="lg" name="switch3" id="switch3" />`} scope={{ Switch }} />
      <LiveEdit code={`<Switch value={true} size="xl" name="switch4" id="switch4" />`} scope={{ Switch }} />
      <LiveEdit code={`<Switch label="Turn it on" variant="red" name="switch4" id="switch4" />`} scope={{ Switch }} />
    </React.Fragment>
  ),
};
