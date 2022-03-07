const rewire = require("rewire")
const Checkbox = rewire("../../../../src/checkbox/src/Checkbox")
const noop = Checkbox.__get__("noop")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})
