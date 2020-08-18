import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import Box from '../Box';
import { themeGet, createComponent } from '../utils';

const StyledCard = createComponent({
  name: 'Card',
  as: Box,
  style: ({ shadow, theme }) => css`
    background: white;
    box-shadow: ${shadow ? themeGet('shadow.soft', 'none') : 'none'};
    border-radius: ${themeGet('radius', 0)}px;
    overflow: hidden;
    border: 1px solid ${theme.colors.greyLight};
  `,
});

/** Cards provide a flexible way to encapsulate content with multiple variants and options. */
const Card = React.forwardRef((props, ref) => <StyledCard ref={ref} {...props} />);

Card.propTypes = {
  shadow: PropTypes.bool,
};

Card.defaultProps = {
  shadow: false,
};

Card.Footer = createComponent({
  name: 'CardFooter',
  as: Box,
  style: css`
    padding: 16px;
  `,
});

Card.Body = createComponent({
  name: 'CardBody',
  as: Box,
  style: () => css`
    padding: 16px;

    & + ${Card.Footer} {
      padding-top: 0px;
    }
  `,
});

Card.Header = createComponent({
  name: 'CardHeader',
  as: Box,
  style: css`
    padding: 16px;
    font-weight: 700;

    & + ${Card.Body} {
      padding-top: 0px;
    }
  `,
});

export default Card;
