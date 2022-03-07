const rewire = require('rewire')
const index_stories = rewire('../../../../src/checkbox/stories/index.stories')
const refCallback = index_stories.__get__('refCallback')
const IndeterminateWithRefExample = index_stories.__get__('IndeterminateWithRefExample')
// @ponicode
describe('refCallback', () => {
  test('0', () => {
    const result = refCallback({ disabled: false })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = refCallback({ disabled: true })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = refCallback(undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('IndeterminateWithRefExample', () => {
  test('0', () => {
    const result = IndeterminateWithRefExample()
    expect(result).toMatchSnapshot()
  })
})
