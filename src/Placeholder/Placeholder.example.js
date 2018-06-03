import React from 'react';
import Placeholder from './Placeholder';

class Example extends React.Component {
  state = { loading: true };
  static defaultProps = {
    delay: 500,
  };

  componentDidMount() {
    this.delayTimer = setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimer);
  }

  render() {
    return (
      <Placeholder loading={this.state.loading} error={this.props.error}>
        I am loaded async!
      </Placeholder>
    );
  }
}

export default {
  group: 'Placeholder',
  render: () => (
    <React.Fragment>
      <p>Placeholder allows you to show a spinner after a specified delay while content is loaded asynchronously.</p>

      <h3>500ms delay</h3>
      <p>
        With a 500ms delay, we shouldn't see a spinner as we don't a flash of loading content. By defaul, `Placeholder`
        has a delay of 1000ms before a spinner is shown.
      </p>
      <Example />

      <h3>2000ms delay</h3>
      <p>
        After the delay, Placeholder will call <code>renderLoading</code> or fallback to the default{' '}
        <code>Spinner</code> component
      </p>
      <Example delay={2000} />

      <h3>Errors</h3>
      <p>
        If an error occurs during an async call, pass an error message to the Placeholder component. It will call
        <code>renderError</code> if provided, otherwise will fallback to default error UI.
      </p>
      <Example error="Some weird error occurred..." />
    </React.Fragment>
  ),
};
