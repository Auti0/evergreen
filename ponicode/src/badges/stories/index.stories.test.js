const rewire = require('rewire')
const index_stories = rewire('../../../../src/badges/stories/index.stories')
const range = index_stories.__get__('range')
// @ponicode
describe('range', () => {
  test('0', () => {
    const result = range(1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = range(-5.48)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = range(-100)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = range(100)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = range(0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = range(NaN)
    expect(result).toMatchSnapshot()
  })
})
