const rewire = require("rewire")
const HighlightIcon = rewire("../../../../commonjs/icons/generated/HighlightIcon")
const _getRequireWildcardCache = HighlightIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = HighlightIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("group")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("tag")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("effect")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("package")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("registry")
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
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "key")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "location")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\""], "add")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "tag")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "key")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
