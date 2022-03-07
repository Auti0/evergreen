const rewire = require('rewire')
const GeosearchIcon = rewire('../../../../commonjs/icons/generated/GeosearchIcon')
const _getRequireWildcardCache = GeosearchIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = GeosearchIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('used')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('add')
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
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'add'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'used'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'action'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
