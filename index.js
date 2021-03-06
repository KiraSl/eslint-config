module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': [
      2,
      'as-needed',
    ],
    'arrow-spacing': 2,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    indent: [
      2,
      2,
    ],
    'jsx-quotes': [
      2,
      'prefer-double',
    ],
    'no-multi-spaces': 2,
    'prefer-arrow-callback': 2,
    quotes: [
      2,
      'single',
    ],
    semi: [
      2,
      'never',
    ],
    'space-before-blocks': [
      2,
      'always',
    ],
    'space-before-function-paren': [
      2,
      'never',
    ],
  },
}
