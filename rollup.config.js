import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    cjs({
      include: 'node_modules/**',
    }),
    filesize(),
  ],
};
