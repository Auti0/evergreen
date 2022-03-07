const rewire = require('rewire')
const SocialMediaIcon = rewire('../../../../commonjs/icons/generated/SocialMediaIcon')
const _getRequireWildcardCache = SocialMediaIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = SocialMediaIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('port')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('alias')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('role')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('package')
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
      ['"[3,"false",false]"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"'],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"'],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'add'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
