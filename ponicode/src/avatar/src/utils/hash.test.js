const hash = require("../../../../../src/avatar/src/utils/hash")
// @ponicode
describe("hash.default", () => {
    test("0", () => {
        let result = hash.default("email@Google.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = hash.default("something@example.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = hash.default("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = hash.default("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = hash.default("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = hash.default("")
        expect(result).toMatchSnapshot()
    })
})
