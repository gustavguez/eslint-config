module.exports = {
	rules: {
		// SOURCE: eslint:recommended
		// URL: htt// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/arrow-body-style
		// Require braces in arrow function body
		"arrow-body-style": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/arrow-parens
		// Require parens in arrow function arguments
		"arrow-parens": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/arrow-spacing
		// Require space before/after arrow function's arrow
		"arrow-spacing": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-duplicate-imports
		// Disallow duplicate imports
		"no-duplicate-imports": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/prefer-arrow-callback
		// Require using arrow functions for callbacks
		"prefer-arrow-callback": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/prefer-const
		// Suggest using const
		"prefer-const": "error",

		// SOURCE: eslint:recommended
		// URL: https://eslint.org/docs/rules/no-extra-semi
		// Disallow unnecessary semicolons
		"no-extra-semi": "off",
		"@typescript-eslint/no-extra-semi": ["error"],

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
		// Warns for any two overloads that could be unified 
		// into one by using a union or an optional/rest parameter (unified-signatures
		"@typescript-eslint/unified-signatures": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
		// Enforces unbound methods are called with their expected scope
		"@typescript-eslint/unbound-method": "off",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
		// Requires type annotations to exist
		"@typescript-eslint/typedef": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
		// Require consistent spacing around type annotations
		"@typescript-eslint/type-annotation-spacing": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
		// Require or disallow semicolons instead of ASI
		"@typescript-eslint/semi": [
			"error",
			"always"
		],

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
		// When adding two variables, operands must both be of type number or of type string
		"@typescript-eslint/restrict-plus-operands": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
		// Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
		"@typescript-eslint/prefer-string-starts-ends-with": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
		// Enforce includes method over indexOf method
		"@typescript-eslint/prefer-includes": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
		// Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
		"@typescript-eslint/prefer-for-of": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
		// Disallow unnecessary constructors
		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
		// Warns if a type assertion does not change the type of an expression
		"@typescript-eslint/no-unnecessary-type-assertion": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
		// Prevents conditionals where the type is always truthy or always falsy
		"@typescript-eslint/no-unnecessary-condition": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
		// Flags unnecessary equality comparisons against boolean literals
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
		// Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
		"@typescript-eslint/no-inferrable-types": "off",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
		// Forbids the use of classes as namespaces
		"@typescript-eslint/no-extraneous-class": ["error", { allowEmpty: true }],

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
		// Disallow usage of the any type
		"@typescript-eslint/no-explicit-any": "off",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
		// Disallow duplicate class members 
		"@typescript-eslint/no-dupe-class-members": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
		// Require explicit return types on functions and class methods
		"@typescript-eslint/explicit-function-return-type": "error",

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
		// Require a specific member delimiter style for interfaces and type literals
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "semi",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false
				}
			}
		],

		// SOURCE: @typescript-eslint
		// URL: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
		// Require a consistent member declaration order
		"@typescript-eslint/member-ordering": "error"
	}
};