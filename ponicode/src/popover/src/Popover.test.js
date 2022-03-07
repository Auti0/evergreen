const rewire = require("rewire")
const Popover = rewire("../../../../src/popover/src/Popover")
const noop = Popover.__get__("noop")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})
