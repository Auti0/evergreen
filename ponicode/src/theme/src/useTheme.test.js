const useTheme = require('../../../../src/theme/src/useTheme')
// @ponicode
describe('useTheme.default', () => {
  test('0', () => {
    const result = useTheme.default()
    expect(result).toMatchSnapshot()
  })
})
