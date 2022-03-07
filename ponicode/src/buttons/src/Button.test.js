const Button = require('../../../../src/buttons/src/Button')
// @ponicode
describe('Button.getIconSizeForButton', () => {
  test('0', () => {
    const result = Button.getIconSizeForButton(48)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = Button.getIconSizeForButton(40)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = Button.getIconSizeForButton(28.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = Button.getIconSizeForButton(36.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = Button.getIconSizeForButton(49)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = Button.getIconSizeForButton(Infinity)
    expect(result).toMatchSnapshot()
  })
})
