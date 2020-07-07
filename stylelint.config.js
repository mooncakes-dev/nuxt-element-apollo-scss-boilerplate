module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: [2,
      {
        message: 'Please use 2 spaces for indentation.',
        severity: 'warning'
      }],
    'string-quotes': 'single',
    'color-hex-case': [
      'lower',
      {
        message: 'Lowercase letters are easier to distinguish from numbers'
      }
    ],
    'selector-combinator-space-after': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-brackets-space-inside': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'always',
    'function-url-quotes': 'always',
    'font-family-name-quotes': 'always-unless-keyword',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'rule-empty-line-before': 'always',
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-no-universal': true,
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-colon-space-before': 'always',
    'media-feature-colon-space-after': 'always',
    'color-no-invalid-hex': true,
    'unit-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': [true, {
      message: 'No duplicate imports allowed'
    }],
    'max-empty-lines': [2, {
      message: 'No more that 2 empty lines allowed',
      severity: 'warning'
    }]
  }
}
