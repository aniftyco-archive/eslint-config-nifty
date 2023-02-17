# eslint-config-nifty

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for NiftyCo projects

## Install

```sh
npm install --save-dev eslint-config-prettier
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
  "name": "my-nifty-app",
  "version": "1.2.4",
  "eslintConfig": {
    "extends": "nifty"
  }
}
```

or to `.eslintrc`:

```json
{
  "extends": "nifty"
}
```

This package also exposes `nifty/react` if you're working in React codebases.

### Install additional dependencies

```sh
npm install --save-dev eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

Then extends `nifty/react` like so:

```json
{
  "extends": "nifty/react"
}
```
