import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['.', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
};

export = config;
