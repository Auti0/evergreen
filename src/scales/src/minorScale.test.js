const minorScale = require('./minorScale')
// @ponicode
describe('minorScale.default', () => {
  test('0', () => {
    const result = minorScale.default(3)
    expect(result).toBe(12)
  })

  test('1', () => {
    const result = minorScale.default(1)
    expect(result).toBe(4)
  })

  test('2', () => {
    const callFunction = () => {
      minorScale.default(undefined)
    }

    expect(callFunction).toThrow()
  })
})
