import React from 'react';
import Proptypes from 'prop-types';

class Icon extends React.Component {
  static injected = false;
  static iconUrl = 'https://cdn.heydoctor.co/assets/css/material-design-icons.css';
  static iconPrefix = 'mdi';

  constructor(props) {
    super(props);
    if (!this.constructor.injected) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = this.constructor.iconUrl;
      document.head.appendChild(link);
      this.constructor.injected = true;
    }
  }

  render() {
    const { name, size, color } = this.props;
    const { iconPrefix } = this.constructor;

    return (
      <i className={`${iconPrefix} ${iconPrefix}-${name}`} style={{ fontSize: size, color: color || 'inherit' }} />
    );
  }
}

Icon.propTypes = {
  name: Proptypes.string.isRequired,
  size: Proptypes.number,
  color: Proptypes.string,
};

export default Icon;
