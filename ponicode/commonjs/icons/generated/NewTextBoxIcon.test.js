const rewire = require('rewire')
const NewTextBoxIcon = rewire('../../../../commonjs/icons/generated/NewTextBoxIcon')
const _getRequireWildcardCache = NewTextBoxIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = NewTextBoxIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('value')
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
    const result = _getRequireWildcardCache('function')
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
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      'account'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'package'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'used'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"[3,"false",false]"', '"[3,"false",false]"'],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
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
