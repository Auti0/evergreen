const MenuDivider = require('../../../../src/menu/src/MenuDivider')
// @ponicode
describe('MenuDivider.default', () => {
  test('0', () => {
    const result = MenuDivider.default()
    expect(result).toMatchSnapshot()
  })
})
