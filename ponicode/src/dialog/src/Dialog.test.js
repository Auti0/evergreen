const rewire = require("rewire")
const Dialog = rewire("../../../../src/dialog/src/Dialog")
const closeHandler = Dialog.__get__("closeHandler")
// @ponicode
describe("closeHandler", () => {
    test("0", () => {
        let result = closeHandler(() => "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = closeHandler(() => "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = closeHandler(() => "http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = closeHandler(() => "http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = closeHandler(() => "https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = closeHandler(() => "")
        expect(result).toMatchSnapshot()
    })
})
