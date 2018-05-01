import React from 'react';
import Alert from './Alert';
import LiveEdit from '../live-edit';

const Children = () => (
  <span>
    <strong>Well done!</strong> You successfully read this important <a href="google.com">alert link</a> message.
  </span>
);

export default {
  group: 'Alert',
  render: () => (
    <React.Fragment>
      <p>
        Alerts are typically used to display meaningful copy to users - typically notifying the user of an important
        message. <br />Use the <code>variant</code> prop to change the styling.
      </p>

      <LiveEdit
        code={`<Alert variant="info"><Children /></Alert>
<Alert variant="success"><Children /></Alert>
<Alert variant="danger"><Children /></Alert>
<Alert variant="warning"><Children /></Alert>`}
        scope={{ Alert, Children }}
        transformCode={code => `<div>${code}</div>`}
      />
    </React.Fragment>
  ),
};
