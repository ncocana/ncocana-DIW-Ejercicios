module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};