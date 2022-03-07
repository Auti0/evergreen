const rewire = require("rewire")
const BankAccountIcon = rewire("../../../../commonjs/icons/generated/BankAccountIcon")
const _getRequireWildcardCache = BankAccountIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = BankAccountIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("value")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("wasGeneratedBy")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("location")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("account")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _getRequireWildcardCache("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_interopRequireWildcard", () => {
    test("0", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "function")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\""], "alias")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "location")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\""], "startup")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "value")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
