module.exports = {
	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/array-bracket-newline
	// Enforce line breaks after opening and before closing array brackets
	"array-bracket-newline": ["error", { "multiline": true }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/array-bracket-spacing
	// Disallow or enforce spaces inside of brackets
	"array-bracket-spacing": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/brace-style
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
	// Require Brace Style
	"brace-style": "off",
	"@typescript-eslint/brace-style": ["error"],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/camelcase
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
	// Require CamelCase
	"camelcase": "off",
	"@typescript-eslint/camelcase": [
		"off",
		{
			"allow": [
				'grant_type',
				'client_id',
				'client_secret',
				'refresh_token'
			]
		}
	],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/comma-spacing
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
	// Enforces spacing around commas
	"comma-spacing": "off",
	"@typescript-eslint/comma-spacing": ["error"],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/comma-style
	// Comma style
	"comma-style": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/computed-property-spacing
	// Disallow or enforce spaces inside of computed properties
	"computed-property-spacing": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/eol-last
	// Require or disallow newline at the end of files
	"eol-last": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/func-call-spacing
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
	// Require or disallow spacing between function identifiers and their invocations
	"func-call-spacing": "off",
	"@typescript-eslint/func-call-spacing": ["error"],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/id-blacklist
	// Disallow specified identifiers
	"id-blacklist": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/id-length
	// Enforce minimum and maximum identifier lengths
	"id-length": ["error", { min: 2 }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/indent
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
	// Enforce consistent indentation
	"indent": "off",
	"@typescript-eslint/indent": [
		"error",
		"tab",
		{
			"FunctionDeclaration": {
				"parameters": "first"
			},
			"FunctionExpression": {
				"parameters": "first"
			}
		}
	],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/key-spacing
	// Enforce consistent spacing between keys and values in object literal properties
	"key-spacing": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/keyword-spacing
	// Enforce consistent spacing before and after keywords
	"keyword-spacing": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/line-comment-position
	// Enforce position of line comments
	"line-comment-position": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/lines-around-comment
	// Require empty lines around comments
	"lines-around-comment": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/max-depth
	// Enforce a maximum depth that blocks can be nested
	"max-depth": ["error", { max: 4 }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/max-len
	// Enforce a maximum line length
	"max-len": ["error", { "code": 140 }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/max-lines
	// Enforce a maximum file length
	"max-lines": ["error", { "max": 300 }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/max-lines-per-function
	// Enforce a maximum function length
	"max-lines-per-function": ["error", 80],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/max-nested-callbacks
	// Enforce a maximum depth that callbacks can be nested
	"max-nested-callbacks": ["error", 3],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/new-parens
	// Require parentheses when invoking a constructor with no arguments
	"new-parens": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-bitwise
	// Disallow bitwise operators 
	"no-bitwise": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-inline-comments
	// Disallow inline comments after code
	"no-inline-comments": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-lonely-if
	// Disallow if statements as the only statement in else blocks 
	"no-lonely-if": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-mixed-operators
	// Disallow mixes of different operators
	"no-mixed-operators": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-multi-assign
	// Disallow Use of Chained Assignment Expressions
	"no-multi-assign": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-multiple-empty-lines
	// Disallow multiple empty lines
	"no-multiple-empty-lines": ["error", { "max": 1 }],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-negated-condition
	// Disallow negated conditions
	"no-negated-condition": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-nested-ternary
	// Disallow nested ternary expressions
	"no-nested-ternary": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-trailing-spaces
	// Disallow trailing whitespace at the end of lines
	"no-trailing-spaces": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-unneeded-ternary
	// Disallow ternary operators when simpler alternatives exist
	"no-unneeded-ternary": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/no-whitespace-before-property
	// Disallow whitespace before properties 
	"no-whitespace-before-property": "error",

	// SOURCE: eslint:recommended
	// URL: hhttps://eslint.org/docs/rules/quotes
	// SOURCE: @typescript-eslint
	// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
	// Enforce the consistent use of either backticks, double, or single quotes
	"quotes": "off",
	"@typescript-eslint/quotes": [
		"error",
		"single"
	],

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/semi-style
	// Enforce location of semicolons
	"semi-style": "error",

	// SOURCE: eslint:recommended
	// URL: https://eslint.org/docs/rules/space-in-parens
	// Disallow or enforce spaces inside of parentheses
	"space-in-parens": "error"
};