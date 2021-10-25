import path from 'path';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const MODULE_NAME = 'example-rollup';

const moduleList = [
	{
		output: path.resolve(`dist/rollup/${MODULE_NAME}.esm.js`),
		format: 'es',
		isExternal: true,
	},
	{
		output: path.resolve(`dist/rollup/${MODULE_NAME}.esm.min.js`),
		format: 'es',
		isExternal: true,
		isUglify: true
	},
	{
		output: path.resolve(`dist/rollup/${MODULE_NAME}.js`),
		format: 'umd',
		name: MODULE_NAME,
	},
	{
		output: path.resolve(`dist/rollup/${MODULE_NAME}.min.js`),
		format: 'umd',
		name: MODULE_NAME,
		isUglify: true
	}
];

export default moduleList.map(config => {
	const pluginList = [
		nodeResolve({
			browser: true,
			preferBuiltins: false
		}),
	];

	if (config.isUglify) {
		pluginList.push(terser());
	}

	return defineConfig({
		input: path.resolve('index.js'),
		output: {
			file: config.output,
			format: config.format,
			name: config.name
		},
		plugins: pluginList
	});
});
