const BasicWithLinkExample = require('../../../../commonjs/empty-states/fixtures/BasicWithLinkExample')
// @ponicode
describe('BasicWithLinkExample.default', () => {
  test('0', () => {
    const result = BasicWithLinkExample.default()
    expect(result).toMatchSnapshot()
  })
})
