module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
};
