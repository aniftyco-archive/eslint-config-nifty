const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      experimentalObjectRestSpread: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    strict: 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-undef': 'error',
    'no-unused-vars': 'error',
  },
};
