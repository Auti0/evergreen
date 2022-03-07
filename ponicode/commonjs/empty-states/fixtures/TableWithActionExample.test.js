const TableWithActionExample = require('../../../../commonjs/empty-states/fixtures/TableWithActionExample')
// @ponicode
describe('TableWithActionExample.default', () => {
  test('0', () => {
    const result = TableWithActionExample.default()
    expect(result).toMatchSnapshot()
  })
})
