const warning = require("../../../src/lib/warning")
// @ponicode
describe("warning.default", () => {
    test("0", () => {
        let result = warning.default("value-added", "Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = warning.default("dedicated", "Uploaded file was not added to the resource. ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = warning.default("logistical", "Sorry, The video you are looking for does not exist.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = warning.default("dedicated", "")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = warning.default("methodical", "ValueError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = warning.default("", "")
        expect(result).toMatchSnapshot()
    })
})
