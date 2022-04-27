const path = require('path');
const fs = require('fs');

const sampleCharon = fs.readFileSync(
	path.resolve('docs/.vuepress/sample/output/sample-charon.min.js'),
	'utf8'
);
const sample = fs.readFileSync(
	path.resolve('docs/.vuepress/sample/output/sample.min.js'),
	'utf8'
);
const readme = fs.readFileSync(path.resolve('docs/README.md'), 'utf8');
const zhReadme = fs.readFileSync(path.resolve('docs/zh/README.md'), 'utf8');

const newReadme = readme.replace(
	/bundle-left">[\d\w]+</, `bundle-left">${sampleCharon.length}b<`
).replace(/bundle-right">[\d\w]+</, `bundle-right">${sample.length}b<`);

const newZhReadme = zhReadme.replace(
	/bundle-left">[\d\w]+</, `bundle-left">${sampleCharon.length}b<`
).replace(/bundle-right">[\d\w]+</, `bundle-right">${sample.length}b<`);

fs.writeFileSync(path.resolve('docs/README.md'), newReadme, 'utf8');
fs.writeFileSync(path.resolve('docs/zh/README.md'), newZhReadme, 'utf8');