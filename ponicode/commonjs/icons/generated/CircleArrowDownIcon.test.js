const rewire = require("rewire")
const CircleArrowDownIcon = rewire("../../../../commonjs/icons/generated/CircleArrowDownIcon")
const _getRequireWildcardCache = CircleArrowDownIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = CircleArrowDownIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("group")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("key")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("registry")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("used")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("action")
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
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "registry")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\""], "used")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "package")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "package")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "tag")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
