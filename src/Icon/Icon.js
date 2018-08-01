import React from 'react';
import Proptypes from 'prop-types';
import { css } from 'styled-components';
import { createComponent } from '../utils';

const StyledIcon = createComponent({
  name: 'Icon',
  tag: 'i',
}).extend`
  ${p => {
    const colorFromTheme = p.theme.colors[p.color];
    const color = p.checked ? colorFromTheme || p.color : p.theme.colors.grayMid;

    return css`
      color: ${color};
      ${p.disabled &&
        css`
          pointer-events: none;
          opacity: 0.65;
        `};
    `;
  }}
`;

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
      <StyledIcon
        {...this.props}
        className={`${iconPrefix} ${iconPrefix}-${name}`}
        style={{ fontSize: size, color: color || 'inherit' }}
      />
    );
  }
}

Icon.propTypes = {
  name: Proptypes.string.isRequired,
  size: Proptypes.number,
  color: Proptypes.string,
};

export default Icon;
