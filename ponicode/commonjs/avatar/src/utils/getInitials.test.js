const rewire = require("rewire")
const getInitialsFile = rewire("../../../../../commonjs/avatar/src/utils/getInitials")
const getInitials = getInitialsFile.__get__("getInitials")
// @ponicode
describe("getInitials", () => {
    test("0", () => {
        let result = getInitials("  ")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = getInitials(" ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = getInitials("Jean-Philippe  George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = getInitials("Jean-Philippe George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = getInitials("George ")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = getInitials("")
        expect(result).toMatchSnapshot()
    })
})
