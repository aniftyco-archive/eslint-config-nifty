# eslint-config-nifty

NiftyCo's TypeScript ESLint shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `prettier`.

1. Install it by running `npm i -D eslint-config-nifty@latest eslint prettier`.
2. Add `"extends": ["nifty"]` to your eslint config.

## Additional linting

We also provide added linting for React.

For React only development, you'll need to install `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react-hooks`.

Then add `"extends": ["nifty/react"]` to your eslint config.
