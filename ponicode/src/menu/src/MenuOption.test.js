const rewire = require("rewire")
const MenuOption = rewire("../../../../src/menu/src/MenuOption")
const noop = MenuOption.__get__("noop")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})
