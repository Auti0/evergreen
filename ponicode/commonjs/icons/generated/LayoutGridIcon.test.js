const rewire = require('rewire')
const LayoutGridIcon = rewire('../../../../commonjs/icons/generated/LayoutGridIcon')
const _getRequireWildcardCache = LayoutGridIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = LayoutGridIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('group')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('role')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('registry')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
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
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"'],
      'accounts'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
      ],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":5,"y":6}"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'port'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
        '"{"x":[10,null,null,null]}"',
      ],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
