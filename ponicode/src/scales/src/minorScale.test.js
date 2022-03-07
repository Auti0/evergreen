const minorScale = require("../../../../src/scales/src/minorScale")
// @ponicode
describe("minorScale.default", () => {
    test("0", () => {
        let result = minorScale.default(5.0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = minorScale.default(4.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = minorScale.default(5)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = minorScale.default(4)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = minorScale.default(400)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = minorScale.default(Infinity)
        expect(result).toMatchSnapshot()
    })
})
