module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-nesting-depth': 5,
    'color-hex-case': 'upper',
  },
};
