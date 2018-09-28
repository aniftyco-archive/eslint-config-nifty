# eslint-config-nifty

NiftyCo's JavaScript ESLint shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `prettier`.

1. Install it by running `yarn add --dev eslint-config-nifty@latest eslint prettier`.
2. Add `"extends": ["nifty"]` to your `.eslintrc`.

## Additional linting

We also provide added linting for React.

For React only development, you'll need to install `eslint-plugin-react` and `eslint-plugin-jsx-a11y`.

Then add `"extends": ["nifty/react"]` to your `.eslintrc`.
