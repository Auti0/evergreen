const rewire = require("rewire")
const MenuItem = rewire("../../../../src/menu/src/MenuItem")
const noop = MenuItem.__get__("noop")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})
