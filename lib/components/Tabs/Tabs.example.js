import React from 'react';
import Tabs from './Tabs';
import LiveEdit from '../../live-edit';

const TabsCode = `<Tabs
  tabs={[
    {
      id: 'test-one',
      title: 'Tab One',
      content: <div>Hey, I'm the first panel</div>,
    },
    {
      id: 'test-two',
      title: 'Tab Two',
      content: <div>Hey, I'm the second panel</div>,
    }, {
      id: 'test-three',
      title: 'Tab Three',
      content: <div>Hey, I'm the third panel</div>,
      disabled: true
    }]}
/>`;

const TabsCodeVertical = `<Tabs
  vertical
  tabs={[
    {
      id: 'test-one',
      title: 'Tab One',
      content: <div>Hey, I'm the first panel</div>,
    },
    {
      id: 'test-two',
      title: 'Tab Two',
      content: <div>Hey, I'm the second panel</div>,
    }]}
/>`;

export default {
  group: 'Tabs',
  render: () => (
    <React.Fragment>
      <p>
        Tabs enable a user to quickly switch between several panels. They can be laid out either horizontally or
        vertically depending on the <code>vertical</code> prop.
      </p>

      <p>
        Tabs receives a <code>tabs</code> prop, which is an array of tab objects that look like the following:
      </p>
      <pre>
        <code>
          {JSON.stringify(
            {
              id: 'string',
              title: 'string|HTMLNode|ReactElement',
              content: 'string|HTMLNode|ReactElement',
              disabled: 'boolean',
              onActive: 'function',
            },
            null,
            2
          )}
        </code>
      </pre>

      <h2>Layout</h2>
      <h3>Horizontal</h3>
      <LiveEdit code={TabsCode} scope={{ Tabs }} />

      <h3>Vertical</h3>
      <LiveEdit code={TabsCodeVertical} scope={{ Tabs }} />

      <h2>Callbacks</h2>
      <h3>onChange</h3>
      <p>
        Tabs, by default, are self-contained and will control themselves. However, if an <code>onChange</code> prop is
        provided, Tabs can now be controlled by the <code>active</code>
      </p>

      <h3>onActive</h3>
      <p>
        <code>onActive</code> will be fired when a tab becomes active. Usually this is used to activate some async
        action to load data or for analytics;
      </p>
    </React.Fragment>
  ),
};
