const PopoverWithTextInputChild = require('../../../../commonjs/popover/fixtures/PopoverWithTextInputChild')
// @ponicode
describe('PopoverWithTextInputChild.default', () => {
  test('0', () => {
    const object = [
      ['Anas', 'Michael', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'Pierre Edouard', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Edmond', 'George', 'Michael'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Michael'],
    ]
    const object2 = [
      ['George', 'Jean-Philippe', 'George', 'Anas'],
      ['George', 'Anas', 'Edmond', 'Anas'],
      ['Michael', 'Anas', 'George', 'Pierre Edouard'],
      ['Pierre Edouard', 'Anas', 'Anas', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Anas'],
      ['Edmond', 'Anas', 'Anas', 'Pierre Edouard'],
      ['Michael', 'George', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Michael', 'Anas', 'George'],
    ]
    const object4 = [
      ['Anas', 'Anas', 'Edmond', 'Edmond'],
      ['Anas', 'Jean-Philippe', 'George', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Michael', 'Edmond'],
      ['Edmond', 'Edmond', 'Edmond', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = PopoverWithTextInputChild.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Anas', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'George', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Michael'],
      ['Pierre Edouard', 'George', 'Edmond', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Jean-Philippe', 'George', 'Michael', 'Edmond'],
      ['Jean-Philippe', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['George', 'Jean-Philippe', 'George', 'Anas'],
      ['George', 'George', 'Michael', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Michael', 'George', 'Michael'],
      ['George', 'George', 'Pierre Edouard', 'George'],
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
      ['Pierre Edouard', 'Michael', 'Jean-Philippe', 'Michael'],
    ]
    const object4 = [
      ['Michael', 'Anas', 'Edmond', 'Anas'],
      ['Michael', 'Anas', 'Edmond', 'George'],
      ['Edmond', 'Edmond', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = PopoverWithTextInputChild.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['George', 'Michael', 'George', 'Anas'],
      ['Jean-Philippe', 'Edmond', 'Anas', 'Edmond'],
      ['Edmond', 'Edmond', 'Pierre Edouard', 'Pierre Edouard'],
      ['Pierre Edouard', 'Pierre Edouard', 'Edmond', 'Michael'],
    ]
    const object2 = [
      ['George', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['Edmond', 'Pierre Edouard', 'Anas', 'George'],
      ['Pierre Edouard', 'Anas', 'Anas', 'Jean-Philippe'],
      ['Michael', 'George', 'George', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Anas', 'Michael', 'Jean-Philippe', 'George'],
      ['Pierre Edouard', 'George', 'Jean-Philippe', 'George'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'Michael'],
      ['Michael', 'Michael', 'Anas', 'George'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Michael', 'Anas', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'George', 'Anas'],
      ['Anas', 'Michael', 'Pierre Edouard', 'Anas'],
      ['Michael', 'Jean-Philippe', 'George', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = PopoverWithTextInputChild.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'Michael'],
      ['George', 'Anas', 'Michael', 'Anas'],
      ['Pierre Edouard', 'Michael', 'Anas', 'Edmond'],
      ['George', 'Edmond', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Pierre Edouard', 'George', 'Pierre Edouard', 'Anas'],
      ['George', 'Pierre Edouard', 'Anas', 'Michael'],
      ['Edmond', 'George', 'Edmond', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'Michael', 'Edmond'],
    ]
    const object3 = [
      ['Anas', 'Michael', 'Anas', 'Pierre Edouard'],
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'Edmond'],
      ['Michael', 'Anas', 'Anas', 'Edmond'],
      ['Edmond', 'Michael', 'George', 'George'],
    ]
    const object4 = [
      ['George', 'Michael', 'Anas', 'Anas'],
      ['Edmond', 'Edmond', 'Anas', 'George'],
      ['Jean-Philippe', 'Edmond', 'Anas', 'Jean-Philippe'],
      ['George', 'Anas', 'Edmond', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = PopoverWithTextInputChild.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Edmond', 'George', 'George', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Anas', 'Edmond'],
      ['Michael', 'Edmond', 'Anas', 'Jean-Philippe'],
      ['Jean-Philippe', 'Edmond', 'Michael', 'Anas'],
    ]
    const object2 = [
      ['George', 'Edmond', 'Pierre Edouard', 'Pierre Edouard'],
      ['Edmond', 'George', 'Pierre Edouard', 'Edmond'],
      ['Michael', 'Anas', 'Michael', 'Edmond'],
      ['Jean-Philippe', 'Edmond', 'Anas', 'Michael'],
    ]
    const object3 = [
      ['Pierre Edouard', 'George', 'George', 'Michael'],
      ['George', 'Pierre Edouard', 'Jean-Philippe', 'Anas'],
      ['George', 'Edmond', 'Michael', 'George'],
      ['George', 'George', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const object4 = [
      ['George', 'Pierre Edouard', 'George', 'Jean-Philippe'],
      ['Michael', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'Edmond', 'Jean-Philippe', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = PopoverWithTextInputChild.default(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = PopoverWithTextInputChild.default([])
    expect(result).toMatchSnapshot()
  })
})
