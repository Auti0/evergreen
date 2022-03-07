const SmallExample = require('../../../../commonjs/empty-states/fixtures/SmallExample')
// @ponicode
describe('SmallExample.default', () => {
  test('0', () => {
    const object = [
      [true, false, false, true],
      [false, false, true, true],
      [false, false, true, true],
      [true, false, false, false],
    ]
    const object2 = [
      [false, true, false, false],
      [true, true, false, true],
      [false, false, true, true],
      [true, true, false, true],
    ]
    const object3 = [
      [false, true, true, true],
      [false, true, false, false],
      [true, false, true, false],
      [false, true, true, true],
    ]
    const object4 = [
      [true, true, false, false],
      [false, true, true, false],
      [true, true, true, true],
      [false, false, false, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [false, true, false, true],
      [false, true, true, false],
      [false, false, false, true],
      [false, false, false, true],
    ]
    const object2 = [
      [true, true, false, false],
      [true, false, true, true],
      [true, false, false, true],
      [true, true, false, true],
    ]
    const object3 = [
      [false, false, true, true],
      [true, false, false, false],
      [false, false, true, false],
      [true, true, false, true],
    ]
    const object4 = [
      [false, false, true, true],
      [false, false, true, true],
      [true, false, true, false],
      [false, true, true, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [false, false, true, false],
      [true, true, true, true],
      [true, true, false, true],
      [false, false, true, false],
    ]
    const object2 = [
      [false, true, true, true],
      [true, true, true, true],
      [false, false, false, true],
      [false, true, false, true],
    ]
    const object3 = [
      [true, true, false, false],
      [true, false, true, true],
      [false, false, true, true],
      [true, false, false, true],
    ]
    const object4 = [
      [false, true, true, true],
      [false, true, true, true],
      [false, true, false, true],
      [false, false, true, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [false, false, false, true],
      [true, false, false, true],
      [false, true, false, true],
      [false, false, true, false],
    ]
    const object2 = [
      [true, true, true, false],
      [false, true, true, false],
      [false, false, false, false],
      [true, false, false, false],
    ]
    const object3 = [
      [false, true, false, true],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
    ]
    const object4 = [
      [true, false, false, false],
      [true, false, false, true],
      [true, true, true, true],
      [false, true, true, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [false, true, false, false],
      [true, true, true, false],
      [true, false, true, false],
      [false, false, true, false],
    ]
    const object2 = [
      [true, true, false, true],
      [false, false, false, false],
      [true, false, false, true],
      [false, false, true, false],
    ]
    const object3 = [
      [true, false, false, true],
      [false, false, true, true],
      [true, true, false, true],
      [false, false, true, false],
    ]
    const object4 = [
      [true, false, false, false],
      [true, true, false, true],
      [true, true, false, false],
      [false, false, true, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = SmallExample.default({ popoverProps: object5 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = SmallExample.default({ popoverProps: [] })
    expect(result).toMatchSnapshot()
  })
})
