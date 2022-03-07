const rewire = require("rewire")
const BacklinkIcon = rewire("../../../../commonjs/icons/generated/BacklinkIcon")
const _getRequireWildcardCache = BacklinkIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = BacklinkIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("alias")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("function")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("registry")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("wasGeneratedBy")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("group")
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
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "group")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "value")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\""], "group")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "effect")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\""], "port")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
