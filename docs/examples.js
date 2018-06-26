const examples = require('../src/**/*.example.js');

const components = Object.keys(examples).reduce((acc, key) => {
  const module = examples[key][key].default;

  return {
    ...acc,
    [key.toLowerCase()]: module,
  };
}, {});

export default components;
