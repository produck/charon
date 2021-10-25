const path = require('path');
const { defineConfig } = require('rollup');
const html = require('@rollup/plugin-html');
const serve = require('rollup-plugin-serve');
const { terser } = require('rollup-plugin-terser');
const livereload = require('rollup-plugin-livereload');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const DIST_DIR = path.join(__dirname, '../.dev');

export default defineConfig({
	input: path.join(__dirname, '../src/example.js'),
	output: {
		dir: DIST_DIR,
		sourcemap: 'inline',
		format: 'umd',
		name: 'example'
	},
	plugins: [
		nodeResolve({
			browser: true,
			preferBuiltins: false
		}),
		terser(),
		serve({ host: '0.0.0.0', port: 3000, contentBase: DIST_DIR }),
		livereload({ watch: DIST_DIR }),
		html(),
	]
});