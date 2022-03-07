const rewire = require('rewire')
const ManyToManyIcon = rewire('../../../../commonjs/icons/generated/ManyToManyIcon')
const _getRequireWildcardCache = ManyToManyIcon.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = ManyToManyIcon.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('effect')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('location')
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
      ['"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"[3,"false",false]"', '"[3,"false",false]"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
      ],
      'location'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
