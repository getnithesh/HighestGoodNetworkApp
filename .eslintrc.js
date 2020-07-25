module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ["airbnb", "prettier"],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'prettier'],
	rules: {
		"prettier/prettier": ["error"],
		"import/prefer-default-export": "off",
		"no-underscore-dangle": "off",
		"import/named": "off",
		"default-case": "off",
		"no-case-declarations": "off",
		"jsx-a11y/label-has-for": "off"
	}
}
