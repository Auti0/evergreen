const rewire = require('rewire')
const Avatar = rewire('../../../../src/avatar/src/Avatar')
const getAvatarInitialsFontSize = Avatar.__get__('getAvatarInitialsFontSize')
// @ponicode
describe('getAvatarInitialsFontSize', () => {
  test('0', () => {
    const result = getAvatarInitialsFontSize(2.6, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getAvatarInitialsFontSize(2.2, 1.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getAvatarInitialsFontSize(2.2, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getAvatarInitialsFontSize(2.4000000000000004, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getAvatarInitialsFontSize(2.2, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getAvatarInitialsFontSize(-Infinity, -Infinity)
    expect(result).toMatchSnapshot()
  })
})
