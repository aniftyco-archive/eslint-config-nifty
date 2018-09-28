module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
};
