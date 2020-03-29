module.exports = {
	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-undef-init
	// Disallow Initializing to undefined
	"no-undef-init": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-use-before-define
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
	// Disallow Early Use
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": "error",
};