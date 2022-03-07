const BasicExample = require('../../../../commonjs/empty-states/fixtures/BasicExample')
// @ponicode
describe('BasicExample.default', () => {
  test('0', () => {
    const result = BasicExample.default()
    expect(result).toMatchSnapshot()
  })
})
