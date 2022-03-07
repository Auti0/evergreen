const minorScale = require('../../../../src/scales/src/minorScale')
// @ponicode
describe('minorScale.default', () => {
  test('0', () => {
    const result = minorScale.default(5.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = minorScale.default(4.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = minorScale.default(5)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = minorScale.default(4)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = minorScale.default(400)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = minorScale.default(Infinity)
    expect(result).toMatchSnapshot()
  })
})
