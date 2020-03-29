
module.exports = {
	extends: [
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/variables',
		'./rules/stylistic',
		'./rules/ecmascript-6'
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {},
};