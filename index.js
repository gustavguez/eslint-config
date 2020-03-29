// Require all rules
const rules = require('./rules');

// Export config
module.exports = {
	env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
	rules: { ...rules },
};