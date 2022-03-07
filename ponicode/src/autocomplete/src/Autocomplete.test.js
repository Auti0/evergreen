const rewire = require('rewire')
const Autocomplete = rewire('../../../../src/autocomplete/src/Autocomplete')
const noop = Autocomplete.__get__('noop')
const fuzzyFilter = Autocomplete.__get__('fuzzyFilter')
const autocompleteItemRenderer = Autocomplete.__get__('autocompleteItemRenderer')
// @ponicode
describe('noop', () => {
  test('0', () => {
    const result = noop()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('fuzzyFilter', () => {
  test('0', () => {
    const result = fuzzyFilter(() => true)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = fuzzyFilter(() => false)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = fuzzyFilter(undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('autocompleteItemRenderer', () => {
  test('0', () => {
    const object = [
      ['Edmond', 'Anas', 'Jean-Philippe', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Anas', 'Anas'],
      ['Pierre Edouard', 'Anas', 'Michael', 'Anas'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Edmond'],
    ]
    const object2 = [
      ['Michael', 'Michael', 'Jean-Philippe', 'Jean-Philippe'],
      ['Michael', 'Michael', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Jean-Philippe', 'George', 'George'],
      ['Edmond', 'Anas', 'Jean-Philippe', 'Edmond'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Edmond', 'Michael', 'Michael'],
      ['Anas', 'Pierre Edouard', 'George', 'Jean-Philippe'],
      ['Michael', 'George', 'Anas', 'Jean-Philippe'],
      ['Jean-Philippe', 'Michael', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object4 = [
      ['Anas', 'Anas', 'Edmond', 'George'],
      ['Jean-Philippe', 'Edmond', 'Jean-Philippe', 'Michael'],
      ['George', 'Michael', 'Michael', 'Anas'],
      ['Jean-Philippe', 'Pierre Edouard', 'Edmond', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Pierre Edouard', 'Anas', 'Michael', 'Michael'],
      ['Michael', 'Edmond', 'Michael', 'Edmond'],
      ['Michael', 'Michael', 'Pierre Edouard', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Edmond', 'Jean-Philippe'],
    ]
    const object2 = [
      ['George', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
      ['Jean-Philippe', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Anas', 'Anas', 'Edmond', 'Michael'],
      ['Pierre Edouard', 'George', 'Edmond', 'Edmond'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Michael', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'Michael', 'Anas', 'Pierre Edouard'],
      ['Anas', 'Pierre Edouard', 'George', 'Jean-Philippe'],
      ['Pierre Edouard', 'Pierre Edouard', 'Edmond', 'Edmond'],
    ]
    const object4 = [
      ['Edmond', 'Michael', 'Edmond', 'Pierre Edouard'],
      ['George', 'George', 'Michael', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Edmond'],
      ['Anas', 'Jean-Philippe', 'Michael', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Edmond', 'Jean-Philippe', 'Edmond', 'George'],
      ['Edmond', 'Pierre Edouard', 'George', 'Pierre Edouard'],
      ['George', 'Edmond', 'Jean-Philippe', 'Edmond'],
      ['George', 'Edmond', 'Edmond', 'George'],
    ]
    const object2 = [
      ['Anas', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'Anas', 'Jean-Philippe'],
      ['Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['George', 'Michael', 'Edmond', 'George'],
    ]
    const object3 = [
      ['Anas', 'George', 'Jean-Philippe', 'Pierre Edouard'],
      ['George', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'George', 'Edmond'],
      ['Michael', 'Pierre Edouard', 'Michael', 'Michael'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Jean-Philippe', 'Michael', 'Jean-Philippe'],
      ['Anas', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Michael', 'Edmond', 'Anas', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Anas', 'George', 'Edmond', 'Michael'],
      ['Michael', 'Michael', 'George', 'George'],
      ['Pierre Edouard', 'Jean-Philippe', 'George', 'George'],
      ['Michael', 'Edmond', 'Anas', 'Edmond'],
    ]
    const object2 = [
      ['Edmond', 'Edmond', 'Anas', 'Pierre Edouard'],
      ['Edmond', 'Anas', 'Edmond', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Jean-Philippe', 'Pierre Edouard', 'Anas', 'Michael'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Jean-Philippe', 'George', 'Pierre Edouard'],
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'Edmond'],
      ['Michael', 'Anas', 'Pierre Edouard', 'Anas'],
      ['George', 'Pierre Edouard', 'Michael', 'George'],
    ]
    const object4 = [
      ['George', 'Jean-Philippe', 'Anas', 'Edmond'],
      ['Anas', 'George', 'George', 'Pierre Edouard'],
      ['Edmond', 'George', 'George', 'Michael'],
      ['Jean-Philippe', 'Edmond', 'George', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Anas', 'Edmond', 'Jean-Philippe', 'Jean-Philippe'],
      ['Anas', 'Michael', 'Anas', 'Edmond'],
      ['Edmond', 'Jean-Philippe', 'Michael', 'Anas'],
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'George'],
    ]
    const object2 = [
      ['Michael', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'Edmond', 'Michael', 'Michael'],
      ['George', 'Edmond', 'Anas', 'Anas'],
      ['George', 'Anas', 'George', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Edmond', 'Anas', 'Michael', 'Edmond'],
      ['Michael', 'Edmond', 'Pierre Edouard', 'Jean-Philippe'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'Anas'],
      ['Michael', 'Anas', 'Jean-Philippe', 'Edmond'],
    ]
    const object4 = [
      ['Pierre Edouard', 'George', 'Michael', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Michael', 'Anas'],
      ['Pierre Edouard', 'George', 'Edmond', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'George', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = autocompleteItemRenderer([])
    expect(result).toMatchSnapshot()
  })
})
