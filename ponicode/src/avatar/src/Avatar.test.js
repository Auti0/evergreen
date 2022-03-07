const rewire = require("rewire")
const Avatar = rewire("../../../../src/avatar/src/Avatar")
const getAvatarInitialsFontSize = Avatar.__get__("getAvatarInitialsFontSize")
// @ponicode
describe("getAvatarInitialsFontSize", () => {
    test("0", () => {
        let result = getAvatarInitialsFontSize(2.6, 10.0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = getAvatarInitialsFontSize(2.2, 1.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = getAvatarInitialsFontSize(2.2, 10.23)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = getAvatarInitialsFontSize(2.4000000000000004, 0.5)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = getAvatarInitialsFontSize(2.2, -0.5)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = getAvatarInitialsFontSize(-Infinity, -Infinity)
        expect(result).toMatchSnapshot()
    })
})
