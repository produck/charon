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

const replaceLeft = /bundle-left">[\d\w]+</;
const replaceRight = /bundle-right">[\d\w]+</;
const replaceLicense = /Copyright\(c\)[\s\d]+/;

const newReadme = readme.replace(replaceLeft, `bundle-left">${sampleCharon.length}b<`)
	.replace(replaceRight, `bundle-right">${sample.length}b<`)
	.replace(replaceLicense, `Copyright(c) ${new Date().getFullYear()} `);

const newZhReadme = zhReadme.replace(replaceLeft, `bundle-left">${sampleCharon.length}b<`)
	.replace(replaceRight, `bundle-right">${sample.length}b<`)
	.replace(replaceLicense, `Copyright(c) ${new Date().getFullYear()} `);

fs.writeFileSync(path.resolve('docs/README.md'), newReadme, 'utf8');
fs.writeFileSync(path.resolve('docs/zh/README.md'), newZhReadme, 'utf8');