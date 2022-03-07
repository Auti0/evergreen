const rewire = require('rewire')
const IconWrapper = rewire('../../../../commonjs/icons/src/IconWrapper')
const _getRequireWildcardCache = IconWrapper.__get__('_getRequireWildcardCache')
const ownKeys = IconWrapper.__get__('ownKeys')
const _interopRequireWildcard = IconWrapper.__get__('_interopRequireWildcard')
const _objectSpread = IconWrapper.__get__('_objectSpread')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('used')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('value')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('add')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('effect')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('ownKeys', () => {
  test('0', () => {
    const result = ownKeys({}, false)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = ownKeys({}, true)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = ownKeys(undefined, undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
        '"{"x":[10,null,null,null]}"',
      ],
      'group'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"'],
      'parameter'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      'used'
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
