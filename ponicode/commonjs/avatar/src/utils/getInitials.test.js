const rewire = require('rewire')
const getInitialsFile = rewire('../../../../../commonjs/avatar/src/utils/getInitials')
const getInitials = getInitialsFile.__get__('getInitials')
// @ponicode
describe('getInitials', () => {
  test('0', () => {
    const result = getInitials('  ')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getInitials(' ')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getInitials('Jean-Philippe  George')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getInitials('Jean-Philippe George')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getInitials('George ')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getInitials('')
    expect(result).toMatchSnapshot()
  })
})
