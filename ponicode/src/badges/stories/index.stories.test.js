const rewire = require("rewire")
const index_stories = rewire("../../../../src/badges/stories/index.stories")
const range = index_stories.__get__("range")
// @ponicode
describe("range", () => {
    test("0", () => {
        let result = range(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = range(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = range(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = range(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = range(0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = range(NaN)
        expect(result).toMatchSnapshot()
    })
})
