const SmallMinimalExample = require('../../../../commonjs/empty-states/fixtures/SmallMinimalExample')
// @ponicode
describe('SmallMinimalExample.default', () => {
  test('0', () => {
    const object = [
      [true, false, true, true],
      [true, true, false, false],
      [false, true, true, true],
      [false, true, true, false],
    ]
    const object2 = [
      [true, true, false, true],
      [false, false, true, false],
      [true, false, false, true],
      [true, false, false, true],
    ]
    const object3 = [
      [false, true, true, true],
      [true, true, false, false],
      [true, false, true, true],
      [true, true, false, true],
    ]
    const object4 = [
      [true, true, false, true],
      [true, false, false, true],
      [false, true, false, true],
      [false, false, true, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallMinimalExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [true, true, false, true],
      [false, false, true, true],
      [false, false, false, true],
      [false, true, false, false],
    ]
    const object2 = [
      [false, true, false, true],
      [false, false, true, false],
      [false, false, true, false],
      [true, true, true, true],
    ]
    const object3 = [
      [false, false, false, true],
      [true, false, true, true],
      [true, false, true, false],
      [false, false, false, false],
    ]
    const object4 = [
      [false, true, false, false],
      [true, false, true, false],
      [true, true, false, false],
      [false, false, false, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallMinimalExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [true, true, false, false],
      [false, true, false, false],
      [true, true, true, true],
      [false, true, true, false],
    ]
    const object2 = [
      [false, false, true, false],
      [false, true, true, false],
      [true, false, true, false],
      [true, true, false, true],
    ]
    const object3 = [
      [false, true, true, false],
      [true, true, false, true],
      [false, true, true, true],
      [false, false, false, false],
    ]
    const object4 = [
      [false, false, false, false],
      [true, true, true, true],
      [true, false, false, true],
      [true, false, true, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallMinimalExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [true, true, true, true],
      [true, false, false, true],
      [false, false, true, true],
      [true, true, true, true],
    ]
    const object2 = [
      [true, false, false, false],
      [true, false, true, false],
      [true, true, false, true],
      [false, true, true, false],
    ]
    const object3 = [
      [true, false, true, false],
      [true, false, true, true],
      [true, false, false, false],
      [true, true, true, false],
    ]
    const object4 = [
      [true, true, false, true],
      [false, false, false, true],
      [false, true, false, true],
      [false, false, true, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallMinimalExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [true, false, true, false],
      [true, false, true, false],
      [false, false, true, false],
      [true, false, true, false],
    ]
    const object2 = [
      [false, true, false, false],
      [true, false, true, true],
      [true, false, true, true],
      [false, true, false, false],
    ]
    const object3 = [
      [false, true, false, true],
      [false, true, true, true],
      [true, true, true, false],
      [false, true, true, true],
    ]
    const object4 = [
      [false, false, false, false],
      [true, false, true, false],
      [false, true, false, true],
      [true, true, false, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallMinimalExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = SmallMinimalExample.default({ popoverProps: [] })
    expect(result).toMatchSnapshot()
  })
})
