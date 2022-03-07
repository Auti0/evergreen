const rewire = require("rewire")
const hash = rewire("../../../../../commonjs/avatar/src/utils/hash")
const hashCode = hash.__get__("hashCode")
// @ponicode
describe("hashCode", () => {
    test("0", () => {
        let result = hashCode("TestUpperCase@Example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = hashCode("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = hashCode("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = hashCode("something@example.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = hashCode("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = hashCode("")
        expect(result).toMatchSnapshot()
    })
})
