const hash = require('../../../../../src/avatar/src/utils/hash')
// @ponicode
describe('hash.default', () => {
  test('0', () => {
    const result = hash.default('email@Google.com')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = hash.default('something@example.com')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = hash.default('ponicode.com')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = hash.default('user@host:300')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = hash.default('bed-free@tutanota.de')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = hash.default('')
    expect(result).toMatchSnapshot()
  })
})
