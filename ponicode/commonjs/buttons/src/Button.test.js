const rewire = require('rewire')
const Button = rewire('../../../../commonjs/buttons/src/Button')
const _getRequireWildcardCache = Button.__get__('_getRequireWildcardCache')
const ownKeys = Button.__get__('ownKeys')
const _interopRequireWildcard = Button.__get__('_interopRequireWildcard')
const _objectSpread = Button.__get__('_objectSpread')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('add')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('parameter')
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
      ['""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"'],
      'role'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""'],
      'value'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'action'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      'tag'
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

// @ponicode
describe('Button.getIconSizeForButton', () => {
  test('0', () => {
    const result = Button.getIconSizeForButton(40)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = Button.getIconSizeForButton(49.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = Button.getIconSizeForButton(40.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = Button.getIconSizeForButton(48)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = Button.getIconSizeForButton(30.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = Button.getIconSizeForButton(-Infinity)
    expect(result).toMatchSnapshot()
  })
})
