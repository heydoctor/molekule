import React from 'react';
import EXAMPLES from './examples';

console.log(EXAMPLES);

const Example = ({ match }) => {
  const example = EXAMPLES[match.params.group];

  if (!example) {
    return <div>That component does not exist</div>;
  }

  return (
    <div className="example">
      <h1>{example.group}</h1>
      {example.render()}
    </div>
  );
};

export default Example;
