const EmptyState = require('../../../../src/empty-states/src/EmptyState')
// @ponicode
describe('EmptyState.default.PrimaryButton', () => {
  test('0', () => {
    const object = [
      ['Michael', 'Pierre Edouard', 'Anas', 'Edmond'],
      ['Edmond', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Anas', 'Edmond', 'Jean-Philippe', 'Michael'],
      ['Jean-Philippe', 'Michael', 'George', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Pierre Edouard', 'George', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'George'],
      ['Edmond', 'Michael', 'Edmond', 'Jean-Philippe'],
      ['Jean-Philippe', 'Michael', 'Anas', 'Michael'],
    ]
    const object3 = [
      ['George', 'George', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'Michael', 'Anas', 'Michael'],
      ['Anas', 'Michael', 'Jean-Philippe', 'Anas'],
      ['Anas', 'Edmond', 'George', 'Edmond'],
    ]
    const object4 = [
      ['George', 'Anas', 'Anas', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'George'],
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'Anas', 'Michael', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Michael', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Michael', 'Michael', 'Jean-Philippe', 'Anas'],
      ['Anas', 'George', 'Jean-Philippe', 'Edmond'],
      ['Edmond', 'Anas', 'Jean-Philippe', 'George'],
    ]
    const object2 = [
      ['George', 'George', 'Pierre Edouard', 'Michael'],
      ['Edmond', 'Michael', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'Edmond', 'Edmond', 'George'],
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'Edmond'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Michael', 'George', 'Pierre Edouard'],
      ['Anas', 'George', 'Edmond', 'Michael'],
      ['Michael', 'Michael', 'Anas', 'Anas'],
      ['Edmond', 'Edmond', 'George', 'George'],
    ]
    const object4 = [
      ['Michael', 'Pierre Edouard', 'Michael', 'Michael'],
      ['Jean-Philippe', 'Edmond', 'Jean-Philippe', 'Jean-Philippe'],
      ['Michael', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Michael', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'Anas', 'Jean-Philippe', 'Michael'],
      ['Anas', 'Edmond', 'Michael', 'Anas'],
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'Michael'],
    ]
    const object2 = [
      ['Anas', 'Jean-Philippe', 'Michael', 'Michael'],
      ['George', 'Michael', 'Anas', 'Pierre Edouard'],
      ['George', 'Michael', 'Pierre Edouard', 'Jean-Philippe'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Edmond', 'George', 'Michael', 'Michael'],
      ['Anas', 'Jean-Philippe', 'George', 'Edmond'],
      ['Pierre Edouard', 'Edmond', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Michael', 'Anas', 'Edmond'],
    ]
    const object4 = [
      ['Michael', 'Anas', 'Anas', 'Anas'],
      ['George', 'Pierre Edouard', 'George', 'George'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'Anas'],
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Jean-Philippe', 'George', 'Anas', 'Michael'],
      ['Michael', 'George', 'Pierre Edouard', 'Michael'],
      ['Michael', 'Jean-Philippe', 'Edmond', 'Edmond'],
      ['Pierre Edouard', 'Edmond', 'Pierre Edouard', 'Edmond'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Anas', 'Pierre Edouard', 'Edmond'],
      ['Pierre Edouard', 'Edmond', 'Jean-Philippe', 'Anas'],
      ['George', 'Jean-Philippe', 'Michael', 'George'],
      ['Jean-Philippe', 'Edmond', 'Michael', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Michael', 'Jean-Philippe', 'George', 'George'],
      ['Michael', 'Jean-Philippe', 'George', 'Edmond'],
      ['Jean-Philippe', 'Michael', 'George', 'Jean-Philippe'],
      ['George', 'Pierre Edouard', 'Michael', 'George'],
    ]
    const object4 = [
      ['George', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
      ['Anas', 'George', 'Michael', 'Pierre Edouard'],
      ['George', 'George', 'Anas', 'Pierre Edouard'],
      ['Pierre Edouard', 'George', 'Michael', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['George', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
      ['Michael', 'Jean-Philippe', 'Michael', 'George'],
      ['Anas', 'Jean-Philippe', 'Anas', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard'],
      ['Jean-Philippe', 'Pierre Edouard', 'Anas', 'Edmond'],
      ['Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe'],
      ['Anas', 'Michael', 'George', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Michael', 'Michael', 'Anas', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'Michael', 'Anas'],
      ['Michael', 'George', 'George', 'Pierre Edouard'],
      ['Anas', 'George', 'Michael', 'Jean-Philippe'],
    ]
    const object4 = [
      ['Anas', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Edmond', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'Pierre Edouard'],
      ['Pierre Edouard', 'Anas', 'Jean-Philippe', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = EmptyState.default.PrimaryButton([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('EmptyState.default.LinkButton', () => {
  test('0', () => {
    const object = [
      ['George', 'Anas', 'Michael', 'George'],
      ['George', 'George', 'George', 'George'],
      ['Michael', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Anas', 'George', 'Edmond', 'Pierre Edouard'],
      ['Edmond', 'Anas', 'Anas', 'Edmond'],
      ['George', 'George', 'George', 'Michael'],
      ['Jean-Philippe', 'Jean-Philippe', 'Edmond', 'Anas'],
    ]
    const object3 = [
      ['Anas', 'Edmond', 'George', 'Edmond'],
      ['Anas', 'Edmond', 'George', 'Pierre Edouard'],
      ['Edmond', 'Edmond', 'Anas', 'George'],
      ['Michael', 'Anas', 'Edmond', 'Pierre Edouard'],
    ]
    const object4 = [
      ['Anas', 'Michael', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'Anas'],
      ['George', 'Anas', 'Pierre Edouard', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Pierre Edouard', 'Michael', 'George', 'Jean-Philippe'],
      ['George', 'Edmond', 'Edmond', 'Jean-Philippe'],
      ['Pierre Edouard', 'Edmond', 'Pierre Edouard', 'George'],
      ['Anas', 'Edmond', 'Anas', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Edmond', 'Edmond', 'George', 'Michael'],
      ['Michael', 'Edmond', 'Pierre Edouard', 'George'],
      ['George', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Jean-Philippe', 'Anas', 'Michael', 'George'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Edmond', 'Jean-Philippe', 'Anas'],
      ['Michael', 'Anas', 'Pierre Edouard', 'Anas'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard'],
      ['Edmond', 'Edmond', 'Anas', 'Anas'],
    ]
    const object4 = [
      ['Anas', 'Edmond', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
      ['Anas', 'Anas', 'Jean-Philippe', 'Jean-Philippe'],
      ['Edmond', 'Anas', 'Edmond', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Michael', 'George', 'Michael', 'Michael'],
      ['Michael', 'Anas', 'Michael', 'Anas'],
      ['Edmond', 'Edmond', 'George', 'Michael'],
      ['Pierre Edouard', 'Pierre Edouard', 'George', 'Pierre Edouard'],
    ]
    const object2 = [
      ['George', 'Edmond', 'Edmond', 'George'],
      ['George', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
      ['George', 'Edmond', 'Jean-Philippe', 'George'],
      ['Anas', 'Anas', 'Pierre Edouard', 'Michael'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Edmond', 'George', 'Jean-Philippe'],
      ['Edmond', 'Anas', 'George', 'Pierre Edouard'],
      ['Anas', 'Jean-Philippe', 'George', 'Pierre Edouard'],
      ['Anas', 'Jean-Philippe', 'George', 'Edmond'],
    ]
    const object4 = [
      ['Anas', 'Edmond', 'Pierre Edouard', 'Jean-Philippe'],
      ['Jean-Philippe', 'Michael', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Anas', 'George', 'Anas'],
      ['Anas', 'Anas', 'George', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Edmond', 'Anas', 'Edmond', 'Anas'],
      ['Michael', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'George'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Michael'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Edmond', 'Jean-Philippe'],
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'Michael'],
      ['Pierre Edouard', 'Anas', 'Pierre Edouard', 'George'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Michael', 'Pierre Edouard', 'Michael'],
      ['Anas', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['Pierre Edouard', 'George', 'George', 'Pierre Edouard'],
      ['Edmond', 'Anas', 'Anas', 'Edmond'],
    ]
    const object4 = [
      ['Anas', 'George', 'Jean-Philippe', 'Michael'],
      ['Anas', 'Jean-Philippe', 'Anas', 'George'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Michael'],
      ['George', 'George', 'Michael', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Pierre Edouard', 'Edmond', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
      ['Anas', 'George', 'Michael', 'Michael'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'Michael'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Pierre Edouard', 'Edmond', 'Pierre Edouard'],
      ['Anas', 'George', 'George', 'Michael'],
      ['Jean-Philippe', 'Edmond', 'George', 'Edmond'],
      ['Edmond', 'George', 'Jean-Philippe', 'Edmond'],
    ]
    const object3 = [
      ['Anas', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
      ['Michael', 'Edmond', 'Edmond', 'Anas'],
      ['Anas', 'George', 'Jean-Philippe', 'George'],
    ]
    const object4 = [
      ['Edmond', 'Michael', 'Jean-Philippe', 'Anas'],
      ['George', 'Michael', 'Michael', 'George'],
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'George', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = EmptyState.default.LinkButton([])
    expect(result).toMatchSnapshot()
  })
})
