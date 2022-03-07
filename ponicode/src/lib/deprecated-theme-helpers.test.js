const deprecated_theme_helpers = require('../../../src/lib/deprecated-theme-helpers')
// @ponicode
describe('deprecated_theme_helpers.getTextPropsForControlHeight', () => {
  test('0', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(40)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(32.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(32)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(36.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(6)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = deprecated_theme_helpers.getTextPropsForControlHeight(-Infinity)
    expect(result).toMatchSnapshot()
  })
})
