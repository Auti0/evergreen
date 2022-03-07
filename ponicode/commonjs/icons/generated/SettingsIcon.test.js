const rewire = require('rewire')
const SettingsIcon = rewire('../../../../commonjs/icons/generated/SettingsIcon')
const _getRequireWildcardCache = SettingsIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = SettingsIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('value')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('action')
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

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '""2006-01-02T14:04:05.000Z""'],
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
      ],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"[3,"false",false]"', '"{"x":5,"y":6}"'],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'parameter'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
