import React from 'react';
import Card from './Card';
import LiveEdit from '../live-edit';

export default {
  group: 'Card',
  render: () => (
    <React.Fragment>
      <p>
        Cards provide a flexible way to encapsulate content with multiple variants and options.
      </p>

      <LiveEdit
        code={`<Card>
  <Card.Header>Header</Card.Header>
  <Card.Body>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>`}
        scope={{ Card }}
        transformCode={code => `<div style={{ maxWidth: '300px' }}>${code}</div>`}
      />
    </React.Fragment>
  ),
};
