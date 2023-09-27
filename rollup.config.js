import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
	input: ['./src/js/index.js'],
	output: {
		file: './dist/index.js',
		format: 'cjs'
	},
	plugins: [
		commonjs(),
		babel({ babelHelpers: 'bundled' }),
		nodePolyfills(),
		nodeResolve({
			browser: true
		})
	],
	external: []
};
