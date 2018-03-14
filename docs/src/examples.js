import keyBy from 'lodash/keyBy'
const context = require.context('../../lib', true, /\.example\.js$/);
const examples = context.keys().map(k => context(k).default)
const grouped = keyBy(examples, ex => ex.group.toLowerCase());
export default grouped;
