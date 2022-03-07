const manageTableCellFocusInteraction = require('../../../../src/table/src/manageTableCellFocusInteraction')
// @ponicode
describe('manageTableCellFocusInteraction.default', () => {
  test('0', () => {
    const object2 = [
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'Jean-Philippe'],
      ['George', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Pierre Edouard', 'Michael', 'Edmond', 'George'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'George'],
    ]
    const object = [
      ['George', 'Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe'],
      ['Michael', 'Anas', 'Jean-Philippe', 'Jean-Philippe'],
      ['Anas', 'Anas', 'Michael', 'George'],
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'Pierre Edouard'],
    ]
    const result = manageTableCellFocusInteraction.default('ArrowUp', {
      parentElement: { children: object, parentElement: { children: object2 } },
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object2 = [
      ['George', 'Michael', 'George', 'Edmond'],
      ['Edmond', 'Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe'],
      ['Anas', 'George', 'George', 'Pierre Edouard'],
      ['Edmond', 'Michael', 'Anas', 'Michael'],
    ]
    const object = [
      ['Pierre Edouard', 'Anas', 'Michael', 'George'],
      ['Pierre Edouard', 'George', 'Anas', 'Jean-Philippe'],
      ['Anas', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Michael', 'Pierre Edouard', 'Michael'],
    ]
    const result = manageTableCellFocusInteraction.default('ArrowUp', {
      parentElement: { children: object, parentElement: { children: object2 } },
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object2 = [
      ['Pierre Edouard', 'Michael', 'Michael', 'Pierre Edouard'],
      ['George', 'Edmond', 'Michael', 'Michael'],
      ['Anas', 'Anas', 'Anas', 'George'],
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'George'],
    ]
    const object = [
      ['Michael', 'Pierre Edouard', 'Michael', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Michael'],
      ['Anas', 'Michael', 'Jean-Philippe', 'Jean-Philippe'],
      ['Michael', 'Michael', 'Pierre Edouard', 'Edmond'],
    ]
    const result = manageTableCellFocusInteraction.default('ArrowLeft', {
      parentElement: { children: object, parentElement: { children: object2 } },
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object2 = [
      ['Michael', 'Edmond', 'George', 'Jean-Philippe'],
      ['Edmond', 'Pierre Edouard', 'Edmond', 'George'],
      ['Anas', 'Anas', 'Anas', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Anas'],
    ]
    const object = [
      ['Jean-Philippe', 'Michael', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['Edmond', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Pierre Edouard', 'Edmond', 'Edmond', 'Pierre Edouard'],
    ]
    const result = manageTableCellFocusInteraction.default('ArrowUp', {
      parentElement: { children: object, parentElement: { children: object2 } },
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object2 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'Michael', 'Anas', 'Michael'],
      ['Anas', 'Anas', 'Michael', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'Anas', 'Michael'],
    ]
    const object = [
      ['Anas', 'George', 'Jean-Philippe', 'Michael'],
      ['Michael', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Edmond', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
      ['Edmond', 'Jean-Philippe', 'Edmond', 'Michael'],
    ]
    const result = manageTableCellFocusInteraction.default('ArrowUp', {
      parentElement: { children: object, parentElement: { children: object2 } },
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = manageTableCellFocusInteraction.default('', {
      parentElement: { children: [], parentElement: { children: [] } },
    })
    expect(result).toMatchSnapshot()
  })
})
