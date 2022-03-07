const manageTableRowFocusInteraction = require('../../../../src/table/src/manageTableRowFocusInteraction')
// @ponicode
describe('manageTableRowFocusInteraction.default', () => {
  test('0', () => {
    const result = manageTableRowFocusInteraction.default('ArrowUp', { parentElement: { children: true } })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = manageTableRowFocusInteraction.default('ArrowDown', { parentElement: { children: true } })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = manageTableRowFocusInteraction.default('ArrowDown', { parentElement: { children: false } })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = manageTableRowFocusInteraction.default('ArrowUp', { parentElement: { children: false } })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = manageTableRowFocusInteraction.default('elio@example.com', { parentElement: { children: false } })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = manageTableRowFocusInteraction.default('', { parentElement: { children: true } })
    expect(result).toMatchSnapshot()
  })
})
