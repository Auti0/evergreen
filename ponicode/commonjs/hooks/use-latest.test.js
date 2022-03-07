const rewire = require("rewire")
const use_latest = rewire("../../../commonjs/hooks/use-latest")
const useLatest = use_latest.__get__("useLatest")
// @ponicode
describe("useLatest", () => {
    test("0", () => {
        let result = useLatest("elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = useLatest("Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = useLatest("Elio")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = useLatest("")
        expect(result).toMatchSnapshot()
    })
})
