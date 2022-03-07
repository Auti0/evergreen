const deprecated = require("../../../src/lib/deprecated")
// @ponicode
describe("deprecated.default", () => {
    test("0", () => {
        let result = deprecated.default("Lights", "bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = deprecated.default("Port", "c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = deprecated.default("Lights", "da7588892")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = deprecated.default("Expressway", "bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = deprecated.default("Lights", "12345")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = deprecated.default("", "")
        expect(result).toMatchSnapshot()
    })
})
