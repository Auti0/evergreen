const rewire = require('rewire')
const hash = rewire('../../../../../commonjs/avatar/src/utils/hash')
const hashCode = hash.__get__('hashCode')
// @ponicode
describe('hashCode', () => {
  test('0', () => {
    const result = hashCode('TestUpperCase@Example.com')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = hashCode('bed-free@tutanota.de')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = hashCode('user@host:300')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = hashCode('something@example.com')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = hashCode('ponicode.com')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = hashCode('')
    expect(result).toMatchSnapshot()
  })
})
