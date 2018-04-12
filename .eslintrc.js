module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'react/prop-types': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': ['error', { multiline: true }],
    // allow async-await
    // 'generator-star-spacing': 0,
    // semi: ['error', 'always'],
    // quotes: ['error', 'single'],
    'space-before-function-paren': [0, 'never'],
  },
  ecmaFeatures: {
    es6: true,
    jsx: true,
  },
  globals: {
    __DEV__: true,
    fetch: true,
  },
}
