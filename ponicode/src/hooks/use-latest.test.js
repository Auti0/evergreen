const use_latest = require("../../../src/hooks/use-latest")
// @ponicode
describe("use_latest.useLatest", () => {
    test("0", () => {
        let result = use_latest.useLatest("elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = use_latest.useLatest("Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = use_latest.useLatest("Elio")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = use_latest.useLatest("")
        expect(result).toMatchSnapshot()
    })
})
