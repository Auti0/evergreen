const rewire = require('rewire')
const SortAscIcon = rewire('../../../../commonjs/icons/generated/SortAscIcon')
const _getRequireWildcardCache = SortAscIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = SortAscIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('add')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('used')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('group')
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
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"[3,"false",false]"',
      ],
      'function'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"[3,"false",false]"'],
      'role'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":5,"y":6}"'],
      'accounts'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":5,"y":6}"', '"[3,"false",false]"'],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
