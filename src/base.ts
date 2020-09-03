import { Linter } from 'eslint';

const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];

const config: Linter.Config = {
  extends: ['prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    strict: 'error',
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2539)
    'no-import-assign': 'off', // ts(2539) & ts(2540)
    'no-new-symbol': 'off', // ts(2588)
    'no-obj-calls': 'off', // ts(2349)
    'no-redeclare': 'off', // ts(2451)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376)
    'no-undef': 'off', // ts(2304)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
    'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
    'prefer-const': 'error', // ts provides better types with const
    'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
    'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
    'valid-typeof': 'off', // ts(2367)
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-extra-semi': 'off',
    'no-unused-vars': 'off',
    'no-return-await': 'off',
    'require-await': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      {
        ignoreArgsIfArgsAfterAreUsed: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          GenericObject: {
            message: 'use Record<string, any> instead',
            fixWith: 'Record<string, any>',
          },
        },
      },
    ],
  },
};

export = config;
