const rewire = require("rewire")
const CornerDialog = rewire("../../../../src/corner-dialog/src/CornerDialog")
const noop = CornerDialog.__get__("noop")
const closeHandler = CornerDialog.__get__("closeHandler")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("closeHandler", () => {
    test("0", () => {
        let result = closeHandler(() => "https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = closeHandler(() => "http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = closeHandler(() => "https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = closeHandler(() => "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = closeHandler(() => "http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = closeHandler(() => "")
        expect(result).toMatchSnapshot()
    })
})
