const ThemeContext = require('../../../../src/theme/src/ThemeContext')
// @ponicode
describe('ThemeContext.getThemeContext', () => {
  test('0', () => {
    const result = ThemeContext.getThemeContext()
    expect(result).toMatchSnapshot()
  })
})
