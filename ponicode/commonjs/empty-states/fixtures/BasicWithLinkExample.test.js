const BasicWithLinkExample = require("../../../../commonjs/empty-states/fixtures/BasicWithLinkExample")
// @ponicode
describe("BasicWithLinkExample.default", () => {
    test("0", () => {
        let result = BasicWithLinkExample.default()
        expect(result).toMatchSnapshot()
    })
})
