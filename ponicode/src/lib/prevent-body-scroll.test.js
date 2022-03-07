const prevent_body_scroll = require("../../../src/lib/prevent-body-scroll")
// @ponicode
describe("prevent_body_scroll.default", () => {
    test("0", () => {
        let result = prevent_body_scroll.default(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = prevent_body_scroll.default(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = prevent_body_scroll.default(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = prevent_body_scroll.default(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = prevent_body_scroll.default(1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = prevent_body_scroll.default(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
