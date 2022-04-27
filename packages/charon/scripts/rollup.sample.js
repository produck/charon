import path from 'path';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
	{
		input: path.resolve('docs/.vuepress/sample/sample-charon.js'),
		output: {
			file: 'docs/.vuepress/sample/output/sample-charon.min.js',
			format: 'es'
		},
		plugins: [
			terser(),
			alias({
				entries: [
					{ find: '@produck/charon', replacement: path.resolve('index.js') }
				]
			}),
			nodeResolve({ browser: true, preferBuiltins: false })
		]
	},
	{
		input: path.resolve('docs/.vuepress/sample/sample.js'),
		output: {
			file: 'docs/.vuepress/sample/output/sample.min.js',
			format: 'es'
		},
		plugins: [
			terser()
		]
	}
];