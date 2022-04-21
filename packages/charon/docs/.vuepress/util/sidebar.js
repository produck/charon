import fs from 'fs';
import path from 'path';

export function getCharonSidebar() {
	let children = []

	Array.from(new Set(
		fs.readdirSync(path.resolve('docs/charon'))
			.map(filename => filename.split('.')[1])
	)).forEach(name => {
			if(name !== 'md') {
				children.push(['/charon/charon.'+name, name.slice(0,1).toUpperCase() + name.slice(1,)])
			}
		})

	return [{
		title: '@produck/charon',
		path: '/charon/charon',
		sidebarDepth: 2,
		collapsable: false,
		children
	}]
}