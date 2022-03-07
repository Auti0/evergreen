const rewire = require('rewire')
const Icon = rewire('../../../../commonjs/icons/src/Icon')
const _getRequireWildcardCache = Icon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = Icon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('parameter')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('location')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('registry')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '"[3,"false",false]"',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '"[3,"false",false]"',
      ],
      'role'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"[3,"false",false]"'],
      'function'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"[3,"false",false]"',
      ],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"'],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
