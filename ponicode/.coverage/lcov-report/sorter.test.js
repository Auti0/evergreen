const rewire = require("rewire")
const sorter = rewire("../../../.coverage/lcov-report/sorter")
const addSorting = sorter.__get__("addSorting")
// @ponicode
describe("addSorting", () => {
    test("0", () => {
        let result = addSorting()
        expect(result).toMatchSnapshot()
    })
})
