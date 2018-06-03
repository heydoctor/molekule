import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import Button from '../Button';
import Spinner from '../Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 50px;
`;

export default class Loadable extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    delay: PropTypes.number,
    renderLoading: PropTypes.func,
    renderError: PropTypes.func,
    onReload: PropTypes.func,
  };

  static defaultProps = {
    delay: 750,
  };

  state = {
    pastDelay: false,
  };

  componentDidMount() {
    this.runDelay();
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimer);
  }

  runDelay() {
    this.setState({ pastDelay: false });
    this.delayTimer = setTimeout(() => {
      this.setState({
        pastDelay: true,
      });
    }, this.props.delay);
  }

  render() {
    const { children, loading, error, renderLoading, renderError, onReload } = this.props;

    if (loading && !this.state.pastDelay) {
      return null;
    }

    if (loading) {
      return renderLoading ? (
        renderLoading()
      ) : (
        <Container>
          <Spinner />
        </Container>
      );
    }

    if (error) {
      return renderError ? (
        renderError()
      ) : (
        <Container textAlign="center">
          <strong>Oh no!</strong>

          <Box mt={1} mb={2}>
            {error}
          </Box>

          <Button size="xs" variant="primary" outline onClick={onReload}>
            Try Again
          </Button>
        </Container>
      );
    }

    return typeof children === 'function' ? children() : children;
  }
}
