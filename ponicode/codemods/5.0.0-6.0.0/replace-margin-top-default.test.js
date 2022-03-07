const replace_margin_top_default = require('../../../codemods/5.0.0-6.0.0/replace-margin-top-default')
// @ponicode
describe('replace_margin_top_default.default', () => {
  test('0', () => {
    const result = replace_margin_top_default.default(
      { source: 'https://api.telegram.org/bot' },
      { jscodeshift: { jsxExpressionContainer: () => false, literal: () => false } }
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = replace_margin_top_default.default(
      { source: 'www.google.com' },
      { jscodeshift: { jsxExpressionContainer: () => true, literal: () => false } }
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = replace_margin_top_default.default(
      { source: 'https://api.telegram.org/bot' },
      { jscodeshift: { jsxExpressionContainer: () => true, literal: () => true } }
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = replace_margin_top_default.default(
      { source: 'https://accounts.google.com/o/oauth2/revoke?token=%s' },
      { jscodeshift: { jsxExpressionContainer: () => true, literal: () => true } }
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = replace_margin_top_default.default(
      { source: 'Www.GooGle.com' },
      { jscodeshift: { jsxExpressionContainer: () => false, literal: () => false } }
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = replace_margin_top_default.default(
      { source: '' },
      { jscodeshift: { jsxExpressionContainer: () => true, literal: () => false } }
    )
    expect(result).toMatchSnapshot()
  })
})
