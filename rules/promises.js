module.exports = {
  rules: {
    // ensure that when a then() is applied, a catch() is applied as well
    // https://github.com/xjamundx/eslint-plugin-promise#rule-catch-or-return
    'promise/catch-or-return': ['error', {
      allowThen: false,
      terminationMethod: ['catch', 'spread', 'finally'],
    }],

    // ensure that inside a then() you make sure to return a new promise or value
    // https://github.com/xjamundx/eslint-plugin-promise#always-return
    'promise/always-return': 'error',

    // ensure standard parameter names for Promise constructors
    // https://github.com/xjamundx/eslint-plugin-promise#param-names
    'promise/param-names': 'error',

    // ensure that Promise is included fresh in each file instead of relying on native
    // https://github.com/xjamundx/eslint-plugin-promise#no-native
    'promise/no-native': 'error',

    // ensure that inside a then() or catch() we always return or throw a raw value
    // https://github.com/xjamundx/eslint-plugin-promise#no-return-wrap
    'promise/no-return-wrap': ['error', { allowReject: false }],

    // ensure no return statements inside callback passed to finally(),
    //  since nothing would consume what's returned
    // https://github.com/xjamundx/eslint-plugin-promise#no-return-in-finally
    'promise/no-return-in-finally': 'error',

    // ensure no nesting inside then() or catch() statements
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/no-nesting': 'error',

    // ensure no nesting inside then() or catch() statements
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/no-nesting': 'error',

    // ensure no promises inside callbacks
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/no-promise-in-callback': 'error',

    // ensure not to create new promises outside of utility libs
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/avoid-new': 'off',

    // prefer await to then() for reading promise values
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/prefer-await-to-then': 'off',

    // prefer async/await to the callback pattern
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/prefer-await-to-callbacks': 'error',
  },
};
