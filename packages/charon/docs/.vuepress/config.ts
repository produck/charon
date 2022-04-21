import { defineConfig } from "vuepress/config"
import { getCharonSidebar } from "./util/sidebar"


export default defineConfig({
	title: 'charon',
	description: 'this is test create doc',
	host: '0.0.0.0',
	port: 3333,
	themeConfig: {
		nav: [
			{
				text: 'v0.2.2',
				items: [
					{
						text: 'v0.2.2',
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