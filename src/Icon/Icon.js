import React from 'react';
import * as MdiIcon from 'mdi-react';
import Proptypes from 'prop-types';

const Icon = ({ name, ...props }) => {
  const parsed = name
    .split('-')
    .map(l => l.charAt(0).toUpperCase() + l.slice(1))
    .join('');
  const IconName = MdiIcon[`${parsed}Icon`];
  return <IconName {...props} />;
};

Icon.propTypes = {
  name: Proptypes.string.isRequired,
  size: Proptypes.number,
  color: Proptypes.string,
};

export default Icon;
