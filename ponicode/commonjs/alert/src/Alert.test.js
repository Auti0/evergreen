const rewire = require('rewire')
const Alert = rewire('../../../../commonjs/alert/src/Alert')
const _getRequireWildcardCache = Alert.__get__('_getRequireWildcardCache')
const ownKeys = Alert.__get__('ownKeys')
const _interopRequireWildcard = Alert.__get__('_interopRequireWildcard')
const _objectSpread = Alert.__get__('_objectSpread')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('used')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('registry')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('accounts')
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
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":[10,null,null,null]}"'],
      'port'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'startup'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '"[3,"false",false]"',
      ],
      'startup'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'function'
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
