const majorScale = require('../../../../src/scales/src/majorScale')
// @ponicode
describe('majorScale.default', () => {
  test('0', () => {
    const result = majorScale.default(8)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = majorScale.default(8.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = majorScale.default(9)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = majorScale.default(100)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = majorScale.default(380)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = majorScale.default(-Infinity)
    expect(result).toMatchSnapshot()
  })
})
