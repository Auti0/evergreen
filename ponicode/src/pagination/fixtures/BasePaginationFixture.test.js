const BasePaginationFixture = require("../../../../src/pagination/fixtures/BasePaginationFixture")
// @ponicode
describe("BasePaginationFixture.default", () => {
    test("0", () => {
        let result = BasePaginationFixture.default()
        expect(result).toMatchSnapshot()
    })
})
