const index_umd = require('../../../src/ssr/index.umd')
// @ponicode
describe('index_umd.extractStyles', () => {
  test('0', () => {
    const result = index_umd.extractStyles()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('index_umd.autoHydrate', () => {
  test('0', () => {
    const result = index_umd.autoHydrate()
    expect(result).toMatchSnapshot()
  })
})
