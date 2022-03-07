const BasePaginationFixture = require('../../../../commonjs/pagination/fixtures/BasePaginationFixture')
// @ponicode
describe('BasePaginationFixture.default', () => {
  test('0', () => {
    const result = BasePaginationFixture.default()
    expect(result).toMatchSnapshot()
  })
})
