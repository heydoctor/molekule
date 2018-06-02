import React, { Fragment } from 'react';
import Flex from './Flex';

export default {
  group: 'Flex',
  render: () => (
    <Fragment>
      <p>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
      <Flex>
        <div>flex</div>
        <div>flex</div>
        <div>flex</div>
      </Flex>
    </Fragment>
  )
}
