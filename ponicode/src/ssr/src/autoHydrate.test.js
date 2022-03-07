const autoHydrate = require('../../../../src/ssr/src/autoHydrate')
// @ponicode
describe('autoHydrate.default', () => {
  test('0', () => {
    const result = autoHydrate.default()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('autoHydrate.hydrate', () => {
  test('0', () => {
    const object = [
      [false, false, true, true],
      [true, true, false, true],
      [false, false, true, false],
      [false, true, true, true],
    ]
    const object2 = [
      [false, false, false, true],
      [false, true, false, true],
      [true, true, true, false],
      [true, false, false, false],
    ]
    const object3 = [
      [true, false, false, false],
      [false, true, true, true],
      [false, true, true, false],
      [false, false, false, true],
    ]
    const object4 = [
      [true, true, true, true],
      [false, false, false, true],
      [false, false, false, true],
      [true, false, false, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = autoHydrate.hydrate({ uiBoxCache: '1.0.0', glamorIds: object5 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [true, true, false, false],
      [true, true, true, true],
      [true, true, false, false],
      [false, true, true, false],
    ]
    const object2 = [
      [true, true, false, false],
      [false, false, false, false],
      [true, true, false, false],
      [true, false, false, true],
    ]
    const object3 = [
      [false, true, false, false],
      [false, true, false, true],
      [true, false, true, true],
      [true, false, true, true],
    ]
    const object4 = [
      [false, true, true, true],
      [false, false, true, true],
      [true, true, false, false],
      [true, false, false, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = autoHydrate.hydrate({ uiBoxCache: '^5.0.0', glamorIds: object5 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [true, true, true, false],
      [true, true, false, false],
      [true, false, false, true],
      [false, true, false, false],
    ]
    const object2 = [
      [true, false, true, true],
      [false, false, false, false],
      [true, true, false, false],
      [false, false, true, true],
    ]
    const object3 = [
      [true, false, true, true],
      [false, false, false, false],
      [false, false, false, true],
      [true, true, false, false],
    ]
    const object4 = [
      [true, false, true, false],
      [false, true, false, false],
      [true, true, false, false],
      [true, true, false, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = autoHydrate.hydrate({ uiBoxCache: 'v1.2.4', glamorIds: object5 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [false, true, true, false],
      [false, false, true, true],
      [false, false, true, false],
      [true, true, true, false],
    ]
    const object2 = [
      [true, false, false, true],
      [false, true, true, false],
      [true, false, true, true],
      [false, false, false, true],
    ]
    const object3 = [
      [false, false, true, true],
      [false, false, false, false],
      [true, true, false, true],
      [true, false, true, true],
    ]
    const object4 = [
      [false, true, true, true],
      [false, false, false, true],
      [false, false, true, true],
      [true, true, false, true],
    ]
    const object5 = [object, object2, object3, object4]
    const result = autoHydrate.hydrate({ uiBoxCache: '^5.0.0', glamorIds: object5 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [false, true, true, false],
      [true, false, true, false],
      [true, true, true, true],
      [false, true, false, false],
    ]
    const object2 = [
      [true, true, false, true],
      [false, false, true, true],
      [true, false, false, true],
      [true, false, false, false],
    ]
    const object3 = [
      [true, true, true, true],
      [true, false, false, false],
      [false, true, true, false],
      [false, false, true, false],
    ]
    const object4 = [
      [true, false, false, false],
      [false, false, true, false],
      [true, true, true, false],
      [false, false, true, false],
    ]
    const object5 = [object, object2, object3, object4]
    const result = autoHydrate.hydrate({ uiBoxCache: 'v1.2.4', glamorIds: object5 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = autoHydrate.hydrate({ uiBoxCache: '', glamorIds: [] })
    expect(result).toMatchSnapshot()
  })
})
