module.exports = {
	rules: {
		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-extra-parens
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
		// Disallow unnecessary parentheses
		"no-extra-parens": "off",
		"@typescript-eslint/no-extra-parens": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/array-callback-return
		// Enforces return statements in callbacks of array's methods
		"array-callback-return": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/block-scoped-var
		// Treat var as Block Scoped
		"block-scoped-var": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/complexity
		// URL: https://github.com/eslint/eslint/issues/4808#issuecomment-167795140
		// Limit Cyclomatic Complexity
		"complexity": ["error", { "max": 5 }],

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/consistent-return
		// Require return statements to either always or never specify values
		"consistent-return": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/curly
		// Require Following Curly Brace Conventions
		"curly": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/default-case
		// Require Default Case in Switch Statements
		"default-case": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/default-param-last
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
		// Enforce default parameters to be last
		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/eqeqeq
		// Require === and !==
		"eqeqeq": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/max-classes-per-file
		// Enforce a maximum number of classes per file
		"max-classes-per-file": ["error", 1],

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-alert
		// Disallow Use of Alert
		"no-alert": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-constructor-return
		// Disallow returning value in constructor
		"no-constructor-return": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-else-return
		// Disallow return before else
		"no-else-return": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-empty-function
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
		// Disallow empty functions
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "error",


		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-eval
		// Disallow eval()
		"no-eval": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-floating-decimal
		// Disallow Floating Decimals 
		"no-floating-decimal": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-implied-eval
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
		// Disallow Implied eval()
		"no-implied-eval": "off",
		"@typescript-eslint/no-implied-eval": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-magic-numbers
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
		// Disallow Magic Numbers
		"no-magic-numbers": "off",
		"@typescript-eslint/no-magic-numbers": ["error", { "ignoreArrayIndexes": true }],

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-multi-spaces
		// Disallow multiple spaces
		"no-multi-spaces": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-new
		// Disallow new For Side Effects
		"no-new": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-new-func
		// Disallow Function Constructor
		"no-new-func": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-script-url
		// Disallow Script URLs
		"no-script-url": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-self-compare
		// Disallow Self Compare
		"no-self-compare": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-sequences
		// Disallow Use of the Comma Operator 
		"no-sequences": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-unused-expressions
		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
		// Disallow Unused Expressions
		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-vars": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-useless-return
		// Disallow redundant return statements
		"no-useless-return": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/yoda
		// Require or disallow Yoda Conditions
		"yoda": "error"
	}
};