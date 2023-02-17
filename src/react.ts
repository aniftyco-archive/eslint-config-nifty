import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['./dist/base.js', 'plugin:react/recommended'],
  plugins: ['jsx-a11y', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'warn',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
  },
};

export = config;
