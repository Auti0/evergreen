const MenuDivider = require("../../../../commonjs/menu/src/MenuDivider")
// @ponicode
describe("MenuDivider.default", () => {
    test("0", () => {
        let result = MenuDivider.default()
        expect(result).toMatchSnapshot()
    })
})
