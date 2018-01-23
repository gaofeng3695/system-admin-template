// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  // 设置规则值时，有三种等级，
  // "off" 或者 0：关闭规则。
  // "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
  // "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // jsdoc规则
    "valid-jsdoc": 1,
    "semi": [2, 'always']
    // 最大长度为 80
    // 'max-len': 'error'
  }
}
