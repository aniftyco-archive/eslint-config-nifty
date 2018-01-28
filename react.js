module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './index',
    './rules/react-a11y',
    './rules/react',
    './rules/strict',
  ].map(require.resolve),
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: '16.0',
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
};
