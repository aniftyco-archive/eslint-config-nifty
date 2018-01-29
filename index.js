module.exports = {
  plugins: [
    'import',
    'prefer-object-spread',
    'promise',
    'sort-class-members',
    'unicorn'
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/promises',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      experimentalObjectRestSpread: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    strict: 'error',
  },
};
