# lint

## Usage

**Install**

```shell
npm install @yueqing/lint -S
# or
yarn add @yueqing/lint
```

**Use in projrct**

`.eslintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/eslint')],
  rules: {
    // custom rules
  },
}
```
