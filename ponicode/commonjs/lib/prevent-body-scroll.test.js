const rewire = require("rewire")
const prevent_body_scroll = rewire("../../../commonjs/lib/prevent-body-scroll")
const preventBodyScroll = prevent_body_scroll.__get__("preventBodyScroll")
// @ponicode
describe("preventBodyScroll", () => {
    test("0", () => {
        let result = preventBodyScroll(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = preventBodyScroll(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = preventBodyScroll(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = preventBodyScroll(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = preventBodyScroll(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
