const Button = require("../../../../src/buttons/src/Button")
// @ponicode
describe("Button.getIconSizeForButton", () => {
    test("0", () => {
        let result = Button.getIconSizeForButton(48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = Button.getIconSizeForButton(40)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = Button.getIconSizeForButton(28.0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = Button.getIconSizeForButton(36.0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = Button.getIconSizeForButton(49)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = Button.getIconSizeForButton(Infinity)
        expect(result).toMatchSnapshot()
    })
})
