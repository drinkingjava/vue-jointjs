module.exports = {
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
	purge: {
		enable: process.env.NODE_ENV === 'production',
		content: [
			'./public/**.*.html',
			'./src/**/*.vue'
		]
	}
}
