import { defineConfig } from "vuepress/config";
import { getCharonSidebar, getVersion } from "./util";

export default defineConfig({
	title: 'charon',
	description: 'optimize the bundle file',
	host: '0.0.0.0',
	port: 3333,
	themeConfig: {
		nav: [
			{
				text: 'Guide',
				link: '/guide/guide',
			},
			{
				text: 'API',
				link: '/charon/charon'
			},
			{
				text: getVersion(),
				items: [
					{
						text:  getVersion(),
						link: '/'
					}
				]
			},
			{
				text: 'GitHub',
				link: 'https://github.com/produck/charon',
				target: '_blank'
			}
		],
		sidebar: [
			{
				title: 'Home',
				path: '/charon',
				collapsable: false,
				children: getCharonSidebar()
			}
		],
		activeHeaderLinks: true,
		search: true
	},
	plugins: [
		'@vuepress/plugin-back-to-top'
	]
})