const rewire = require('rewire')
const Dialog = rewire('../../../../src/dialog/src/Dialog')
const closeHandler = Dialog.__get__('closeHandler')
// @ponicode
describe('closeHandler', () => {
  test('0', () => {
    const result = closeHandler(() => 'http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = closeHandler(() => 'Www.GooGle.com')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = closeHandler(() => 'http://base.com')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = closeHandler(() => 'http://www.croplands.org/account/confirm?t=')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = closeHandler(() => 'https://twitter.com/path?abc')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = closeHandler(() => '')
    expect(result).toMatchSnapshot()
  })
})
