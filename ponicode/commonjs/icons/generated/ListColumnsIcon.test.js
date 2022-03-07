const rewire = require('rewire')
const ListColumnsIcon = rewire('../../../../commonjs/icons/generated/ListColumnsIcon')
const _interopRequireWildcard = ListColumnsIcon.__get__('_interopRequireWildcard')
const _getRequireWildcardCache = ListColumnsIcon.__get__('_getRequireWildcardCache')
// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'key'
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
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"[3,"false",false]"',
        '"{"x":[10,null,null,null]}"',
      ],
      'action'
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
    const result = _getRequireWildcardCache('location')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('role')
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
