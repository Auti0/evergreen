const rewire = require("rewire")
const ColorExamples = rewire("../../../../src/colors/stories/ColorExamples")
const capitalize = ColorExamples.__get__("capitalize")
// @ponicode
describe("capitalize", () => {
    test("0", () => {
        let result = capitalize("Mon Aug 03 12:45:00")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = capitalize("2017-09-29T23:01:00.000Z")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = capitalize("2017-09-29T19:01:00.000")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = capitalize("01:04:03")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = capitalize("")
        expect(result).toMatchSnapshot()
    })
})
