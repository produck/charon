import 'vuepress/config';
import * as fs from 'fs';
import * as path from 'path';

function getChildren(zh: boolean) {
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
			`charon.${name}`,
			name[0].toUpperCase() + name.slice(1)
		])
	})

	return children
}

function getPackageInfo() {
	const content = fs.readFileSync(path.resolve('package.json'), 'utf8');

	return JSON.parse(content);
}

const packageInfo = getPackageInfo();

export default {
	host: '0.0.0.0',
	port: 3333,
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Charon',
			description: 'more common statements more smaller'
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'Charon',
			description: '常用语句用的更多，打包后输出文件越小'
		}
	},
	themeConfig: {
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				nav: [
					{
						text: 'Guide',
						link: '/guide/',
					},
					{
						text: 'API Reference',
						link: '/charon/'
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
						link:  packageInfo.homepage,
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
					'/charon/': [{
						title: 'API Reference',
						sidebarDepth: 2,
						collapsable: false,
						children: getChildren(false)
					}]
				}
			},
			'/zh/': {
				selectText: '选择语言',
				label: '简体中文',
				nav: [
					{
						text: '指南',
						link: '/zh/guide/',
					},
					{
						text: 'API参考',
						link: '/zh/charon/'
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
						link:  packageInfo.homepage,
						target: '_blank'
					}
				],
				sidebar: {
					'/zh/guide/': [
						{
							title: '指南',
							sidebarDepth: 2,
							collapsable: false,
							children: [
								['', '介绍'],
								['started', '快速上手']
							]
						}
					],
					'/zh/charon/': [{
						title: 'API参考',
						sidebarDepth: 2,
						collapsable: false,
						children: getChildren(true)
					}]
				},
			}
		},
		activeHeaderLinks: true,
		search: true,
		lastUpdated: 'Last Updated'
	},
	plugins: [
		'@vuepress/plugin-back-to-top'
	],
	markdown: {
		lineNumbers: false
	}
}