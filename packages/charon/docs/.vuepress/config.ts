import 'vuepress/config';
import * as fs from 'fs';
import * as path from 'path';

function getCharonSidebar() {
	const filenameMap = {};
	const reg = /^[^\.]*\.md/ig;

	fs.readdirSync(path.resolve('docs/charon'))
		.filter(filename => !reg.test(filename))
		.forEach(name => {
			filenameMap[name.split('.')[1]] = true
		})

	const children = [];

	Object.keys(filenameMap).forEach(name => {
		children.push([
			`/charon/charon.${name}`,
			name[0].toUpperCase() + name.slice(1)
		])
	})

	return [{
		title: 'API Reference',
		path: '/charon/charon',
		sidebarDepth: 2,
		collapsable: false,
		children
	}]
}

function getPackageInfo() {
	const content = fs.readFileSync(path.resolve('package.json'), 'utf8');

	return JSON.parse(content);
}

const packageInfo = getPackageInfo();

export default {
	title: 'charon',
	description: 'more common statements more smaller',
	host: '0.0.0.0',
	port: 3333,
	themeConfig: {
		nav: [
			{
				text: 'Guide',
				link: '/guide/',
			},
			{
				text: 'API Reference',
				link: '/charon/charon'
			},
			{
				text: `v${packageInfo.version}`,
				items: [
					{
						text: `v${packageInfo.version}`,
						link: '/'
					}
				]
			},
			{
				text: 'GitHub',
				link:  packageInfo.repository.url,
				target: '_blank'
			}
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					sidebarDepth: 2,
					collapsable: false,
					children: [
						['', 'Introduction'],
						['started', 'Getting Started']
					]
				}
			],
			'/charon/': getCharonSidebar()
		},
		activeHeaderLinks: true,
		search: true
	},
	plugins: [
		'@vuepress/plugin-back-to-top'
	],
	markdown: {
		lineNumbers: false
	}
}