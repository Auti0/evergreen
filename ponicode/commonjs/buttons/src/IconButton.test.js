const rewire = require('rewire')
const IconButton = rewire('../../../../commonjs/buttons/src/IconButton')
const ownKeys = IconButton.__get__('ownKeys')
const _getRequireWildcardCache = IconButton.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = IconButton.__get__('_interopRequireWildcard')
const _objectSpread = IconButton.__get__('_objectSpread')
// @ponicode
describe('ownKeys', () => {
  test('0', () => {
    const result = ownKeys({}, true)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = ownKeys({}, false)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = ownKeys(undefined, undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('add')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('port')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('account')
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
      ['"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"'],
      'tag'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"[3,"false",false]"', '"{"x":5,"y":6}"', '"[3,"false",false]"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_objectSpread', () => {
  test('0', () => {
    const result = _objectSpread({})
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _objectSpread(undefined)
    expect(result).toMatchSnapshot()
  })
})
