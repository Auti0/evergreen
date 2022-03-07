const rewire = require('rewire')
const TakeActionIcon = rewire('../../../../commonjs/icons/generated/TakeActionIcon')
const _interopRequireWildcard = TakeActionIcon.__get__('_interopRequireWildcard')
const _getRequireWildcardCache = TakeActionIcon.__get__('_getRequireWildcardCache')
// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"[3,"false",false]"', '"{"x":5,"y":6}"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'function'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'accounts'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""'],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('role')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('action')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('registry')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('port')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})
