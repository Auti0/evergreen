const TableWithActionExample = require("../../../../commonjs/empty-states/fixtures/TableWithActionExample")
// @ponicode
describe("TableWithActionExample.default", () => {
    test("0", () => {
        let result = TableWithActionExample.default()
        expect(result).toMatchSnapshot()
    })
})
