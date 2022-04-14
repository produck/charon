module.exports = {
	base: '/',
	title: 'charon',
	description: 'this is test create doc',
	head: [
			['link', { rel: 'icon', href: 'logo_zi.png'}]
	],
	host: '0.0.0.0',
	port: 8888,
	dest: 'docs-dist',
	locales: {
			'/': {
					lang: 'en-US',
					title: 'charon',
					description: 'this is English doc'
			},
			'/zh/': {
					lang: 'zh-CN',
					title: '欢迎',
					description:'这是使用vuepress产生的html'
			}
	},
	themeConfig: {
			logo: 'logo_zi.png',
			nav: [
					{text: 'Home', link: '/'},
					{text: 'External', link: '/', target: '_blank'}
			],
			sidebar: {
				'/': [
					''
				],
				'/charon': [
					'',
					'charon.log',
					'charon.error',
					'charon.warn'
				]
			},
			displayAllHeaders: true, // 显示所有页面的标题链接
			activeHeaderLinks: false, // 禁用实时更新嵌套链接的hash
			search: true
	},
	plugins: ['@vuepress/plugin-back-to-top']
}