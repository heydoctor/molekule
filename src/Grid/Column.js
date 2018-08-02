import React from 'react';
import { head } from 'lodash';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Flex from '../Flex';
import { createComponent } from '../utils';

const getWidthPercent = (width, columns) => `${(width / columns) * 100}%`;

const getColumnWidth = (width, columns) =>
  width / columns !== 1
    ? css`
        display: block;
        flex-basis: ${getWidthPercent(width, columns)};
        max-width: ${getWidthPercent(width, columns)};
      `
    : css`
        max-width: 100%;
        width: 100%;
        flex: auto;
      `;

const getPadding = p => {
  if (p.collapse) return 0;
  return p.gutter ? p.gutter / 2 : p.theme.grid.gutter / 2;
};

const getOffset = (offset, columns) => css`
  margin-left: ${offset === 0 ? 0 : getWidthPercent(offset, columns)};
`;

const StyledColumn = createComponent({
  name: 'Column',
  as: Flex,
}).extend`
  box-sizing: border-box;
  flex: 1 0 auto;
  padding-left: ${getPadding}px;
  padding-right: ${getPadding}px;

  ${p => {
    const sizes = Object.keys(p.theme.grid.sizes);
    const mediaQueries = sizes.filter(size => !!p[size]).map(
      size =>
        // if smallest breakpoint no query needed
        size === head(sizes)
          ? css`
              ${getColumnWidth(p[size], p.theme.grid.columns)};
              ${p[`${size}Offset`] && getOffset(p[`${size}Offset`], p.theme.grid.columns)};
            `
          : // all other breakpoints use a media query
            css`
              @media (min-width: ${p.theme.grid.sizes[size]}px) {
                ${getColumnWidth(p[size], p.theme.grid.columns)};
                ${p[`${size}Offset`] !== undefined && getOffset(p[`${size}Offset`], p.theme.grid.columns)};
              }
            `
    );

    return css`
      order: ${p.order ? p.order : 'initial'};
      ${mediaQueries};
    `;
  }}
`;

const Column = props => <StyledColumn {...props} />;

Column.propTypes = {
  /**
   * Lay row out vertically
   */
  vertical: PropTypes.number,

  /**
   * Margin between columns
   */
  gutter: PropTypes.number,

  /**
   *  Reverse the order of the columns
   */
  reverse: PropTypes.bool,

  /**
   * Collapse columns by removing gutters
   */
  collapse: PropTypes.bool,
};

Column.defaultProps = {
  vertical: false,
  reverse: false,
  collapse: false,
};

export default Column;
