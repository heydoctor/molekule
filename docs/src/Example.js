import React from 'react';
import EXAMPLES from './examples';


export default class Example extends React.Component {
  render() {
    const example = EXAMPLES[this.props.match.params.group];

    if (!example) {
      return <div>That component does not exist</div>
    }

    return (
      <div className="example">
        <h1>{example.group}</h1>
        {example.render()}
      </div>
    )
  }
}
