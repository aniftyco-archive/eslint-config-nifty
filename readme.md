# eslint-config-nifty

NiftyCo's JavaScript ESLint shared config. Edit

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. Install it by running `yarn add --dev eslint-config-nifty@latest`.
2. Add `"extends": ["nifty"]` to your `.eslintrc`.

## Additional linting

We also provide added linting for React and React Native.

For React only development, you'll need to install `eslint-plugin-react` and `eslint-plugin-react-a11y`.

Then add `"extends": ["nifty/react"]` to your `.eslintrc`.

For React Native along with those two others, you'll need `eslint-plugin-react-native`.

Then add `"extends": ["nifty/react-native"]` to your `.eslintrc`.
