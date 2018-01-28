module.exports = {
  extends: [
    './react',
    './rules/react-native',
  ].map(require.resolve),
  rules: {},
};
