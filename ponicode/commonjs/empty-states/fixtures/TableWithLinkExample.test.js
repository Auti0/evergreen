const TableWithLinkExample = require('../../../../commonjs/empty-states/fixtures/TableWithLinkExample')
// @ponicode
describe('TableWithLinkExample.default', () => {
  test('0', () => {
    const result = TableWithLinkExample.default()
    expect(result).toMatchSnapshot()
  })
})
