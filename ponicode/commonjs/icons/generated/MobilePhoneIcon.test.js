const rewire = require('rewire')
const MobilePhoneIcon = rewire('../../../../commonjs/icons/generated/MobilePhoneIcon')
const _getRequireWildcardCache = MobilePhoneIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = MobilePhoneIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('add')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('group')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('action')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('role')
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
      ['"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"[3,"false",false]"'],
      'account'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""'],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"[3,"false",false]"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'value'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""'],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":5,"y":6}"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'port'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
