# gustavguez-eslint-config
Rules for **eslint** and **typescript-eslint** packages for an angular 2+ projects.

## Extended rules
This package extends and configure the next packages:
  - eslint:recommended
  - plugin:@typescript-eslint/eslint-recommended
  - plugin:@typescript-eslint/recommended
  - plugin:@typescript-eslint/recommended-requiring-type-checking

## Install dependencies
Ensure this packages are installed:
```sh
$ npm i -D eslint @typescript-eslint/eslint-plugin
$ npm i -D eslint @typescript-eslint/parser
$ npm i -D eslint @typescript-eslint/eslint-plugin-tslint
```

## Example of use
Ensure to place this code in **.eslintrc.js** in project root.
```javascript
module.exports = {
    extends: [
		'gustavguez-eslint-config'
	].map(require.resolve),
    parserOptions: {
        project: "tsconfig.json",
    },
    rules: {}
}
```

# Executing ESLint
As a next step, in ***package.json*** file to add an ESLint command in ***“scripts”*** section.
```json
"eslint": "eslint 'src/**/*.ts'"
```

Now you are able to run in console:
```sh
$ npm run eslint
```

