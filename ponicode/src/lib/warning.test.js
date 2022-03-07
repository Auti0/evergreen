const warning = require('../../../src/lib/warning')
// @ponicode
describe('warning.default', () => {
  test('0', () => {
    const result = warning.default('value-added', 'Sorry, This video cannot be accessed via this website')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = warning.default('dedicated', 'Uploaded file was not added to the resource. ')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = warning.default('logistical', 'Sorry, The video you are looking for does not exist.')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = warning.default('dedicated', '')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = warning.default('methodical', 'ValueError exception should be raised')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = warning.default('', '')
    expect(result).toMatchSnapshot()
  })
})
