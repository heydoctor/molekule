import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { createComponent } from '../utils';

const getPadding = p => (p.gutter ? p.gutter / 2 : p.theme.grid.gutter / 2);

const StyledContainer = createComponent({
  name: 'Container',
  as: Box,
}).extend`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${p => (p.fluid ? '100%' : `${p.maxWidth || p.theme.grid.containerMaxWidth}px`)};
  padding-left: ${getPadding}px;
  padding-right: ${getPadding}px;
`;

StyledContainer.displayName = 'Container';

const Container = ({ children, gutter, maxWidth, fluid }) => (
  <StyledContainer fluid={fluid} gutter={gutter} maxWidth={maxWidth}>
    {React.Children.map(children, child => React.cloneElement(child, { gutter }))}
  </StyledContainer>
);

Container.propTypes = {
  gutter: PropTypes.number,
};

export default Container;
