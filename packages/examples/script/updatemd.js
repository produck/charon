const path = require('path');
const fs = require('fs');

const example2 = fs.readFileSync(path.resolve('dist/example/example2.min.js'), 'utf8');
const example3 = fs.readFileSync(path.resolve('dist/example/example3.min.js'), 'utf8');
const readme = fs.readFileSync(path.resolve('../charon/docs/README.md'), 'utf8');

const newReadme = readme.replace(/bundle-left">[\d\w]+</, `bundle-left">${example2.length}b<`)
	.replace(/bundle-right">[\d\w]+</, `bundle-right">${example3.length}b<`);

fs.writeFileSync(path.resolve('../charon/docs/README.md'), newReadme, 'utf8');