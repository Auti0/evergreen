const rewire = require('rewire')
const remove_undefined = rewire('../../../commonjs/lib/remove-undefined')
const removeUndefined = remove_undefined.__get__('removeUndefined')
const ownKeys = remove_undefined.__get__('ownKeys')
const _objectSpread = remove_undefined.__get__('_objectSpread')
// @ponicode
describe('removeUndefined', () => {
  test('0', () => {
    const result = removeUndefined()
    expect(result).toMatchSnapshot()
  })
})

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
