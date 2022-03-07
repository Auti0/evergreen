const rewire = require('rewire')
const Manager = rewire('../../../../commonjs/manager/src/Manager')
const _objectSpread = Manager.__get__('_objectSpread')
const _createSuper = Manager.__get__('_createSuper')
const ownKeys = Manager.__get__('ownKeys')
const _isNativeReflectConstruct = Manager.__get__('_isNativeReflectConstruct')
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
describe('_createSuper', () => {
  test('0', () => {
    const result = _createSuper(false)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _createSuper(true)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _createSuper(undefined)
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
describe('_isNativeReflectConstruct', () => {
  test('0', () => {
    const result = _isNativeReflectConstruct()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('Manager.default', () => {
  test('0', () => {
    const object = [
      ['Pierre Edouard', 'Edmond', 'Pierre Edouard', 'George'],
      ['George', 'Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe'],
      ['Edmond', 'Michael', 'George', 'Pierre Edouard'],
      ['George', 'Michael', 'Anas', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Anas', 'Edmond', 'George', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Anas', 'Anas'],
      ['Pierre Edouard', 'George', 'Michael', 'Edmond'],
      ['Edmond', 'George', 'George', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Anas', 'Pierre Edouard', 'Edmond', 'Anas'],
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Anas', 'George'],
      ['Jean-Philippe', 'Edmond', 'Edmond', 'Jean-Philippe'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Edmond', 'George', 'Edmond'],
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'George'],
      ['Edmond', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
      ['Michael', 'Michael', 'Michael', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = Manager.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['George', 'Edmond', 'George', 'Jean-Philippe'],
      ['Pierre Edouard', 'George', 'George', 'Michael'],
      ['Anas', 'Edmond', 'George', 'George'],
      ['Pierre Edouard', 'Jean-Philippe', 'Edmond', 'Michael'],
    ]
    const object2 = [
      ['Michael', 'Anas', 'Edmond', 'Anas'],
      ['Anas', 'Anas', 'Edmond', 'Edmond'],
      ['Michael', 'Michael', 'Anas', 'Edmond'],
      ['Edmond', 'Jean-Philippe', 'Edmond', 'Michael'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Michael', 'Edmond', 'Anas'],
      ['George', 'Michael', 'Jean-Philippe', 'George'],
      ['Michael', 'Michael', 'Michael', 'Anas'],
      ['Anas', 'Jean-Philippe', 'George', 'Anas'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Anas', 'Edmond', 'Edmond'],
      ['Pierre Edouard', 'Jean-Philippe', 'George', 'Jean-Philippe'],
      ['Edmond', 'George', 'Anas', 'George'],
      ['Anas', 'Jean-Philippe', 'George', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = Manager.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Anas', 'Pierre Edouard', 'Michael', 'Anas'],
      ['Pierre Edouard', 'George', 'Michael', 'George'],
      ['George', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
      ['Pierre Edouard', 'George', 'Anas', 'Edmond'],
    ]
    const object2 = [
      ['Edmond', 'George', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Jean-Philippe', 'Michael', 'Edmond'],
      ['Edmond', 'Edmond', 'George', 'George'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'Jean-Philippe', 'George', 'Pierre Edouard'],
      ['Anas', 'Edmond', 'Anas', 'Michael'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'Anas'],
      ['Pierre Edouard', 'Anas', 'George', 'Michael'],
      ['Edmond', 'Jean-Philippe', 'George', 'Jean-Philippe'],
      ['Edmond', 'Edmond', 'George', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = Manager.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Edmond', 'Anas', 'Edmond', 'Edmond'],
      ['George', 'Anas', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'Jean-Philippe', 'Michael', 'Anas'],
      ['Jean-Philippe', 'George', 'George', 'Edmond'],
    ]
    const object2 = [
      ['Anas', 'Michael', 'Michael', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Anas', 'Anas'],
      ['Michael', 'Jean-Philippe', 'Edmond', 'Michael'],
      ['Michael', 'Michael', 'George', 'Edmond'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['Pierre Edouard', 'George', 'Pierre Edouard', 'Anas'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'George', 'Jean-Philippe'],
    ]
    const object4 = [
      ['Michael', 'Pierre Edouard', 'Michael', 'Edmond'],
      ['George', 'George', 'Edmond', 'George'],
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'George'],
      ['Edmond', 'Anas', 'Michael', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = Manager.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Jean-Philippe', 'George', 'Pierre Edouard', 'Michael'],
      ['George', 'Edmond', 'Jean-Philippe', 'Jean-Philippe'],
      ['George', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'Michael', 'Michael'],
    ]
    const object2 = [
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Pierre Edouard', 'Anas', 'George', 'Anas'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Michael', 'George', 'Michael', 'Michael'],
      ['Anas', 'Edmond', 'George', 'Michael'],
      ['Pierre Edouard', 'Edmond', 'Pierre Edouard', 'Michael'],
      ['George', 'Edmond', 'George', 'Anas'],
    ]
    const object4 = [
      ['Michael', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Jean-Philippe', 'Michael', 'Pierre Edouard', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
      ['George', 'George', 'Michael', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = Manager.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = Manager.default([])
    expect(result).toMatchSnapshot()
  })
})
