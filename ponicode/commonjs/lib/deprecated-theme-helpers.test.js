const deprecated_theme_helpers = require("../../../commonjs/lib/deprecated-theme-helpers")
// @ponicode
describe("deprecated_theme_helpers.getTextPropsForControlHeight", () => {
    test("0", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(36)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(32)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(36.0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(40)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(40.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = deprecated_theme_helpers.getTextPropsForControlHeight(Infinity)
        expect(result).toMatchSnapshot()
    })
})
