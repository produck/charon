import path from 'path';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: path.resolve('src/example3.js'),
	output: {
		file: 'dist/example/example3.min.js',
		format: 'es'
	},
	plugins: [
		terser(),
		nodeResolve({ browser: true, preferBuiltins: false })
	]
}