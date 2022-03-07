const rewire = require("rewire")
const ShieldIcon = rewire("../../../../commonjs/icons/generated/ShieldIcon")
const _interopRequireWildcard = ShieldIcon.__get__("_interopRequireWildcard")
const _getRequireWildcardCache = ShieldIcon.__get__("_getRequireWildcardCache")
// @ponicode
describe("_interopRequireWildcard", () => {
    test("0", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\""], "registry")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\""], "startup")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\""], "alias")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "accounts")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "startup")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("package")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("location")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("value")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("used")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("add")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _getRequireWildcardCache("")
        expect(result).toMatchSnapshot()
    })
})
