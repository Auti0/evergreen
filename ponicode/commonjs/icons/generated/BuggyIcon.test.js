const rewire = require('rewire')
const BuggyIcon = rewire('../../../../commonjs/icons/generated/BuggyIcon')
const _interopRequireWildcard = BuggyIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"[3,"false",false]"', '"{"x":5,"y":6}"'],
      'function'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'action'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'role'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
      ],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
