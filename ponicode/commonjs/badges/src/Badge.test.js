const rewire = require("rewire")
const Badge = rewire("../../../../commonjs/badges/src/Badge")
const _getRequireWildcardCache = Badge.__get__("_getRequireWildcardCache")
const ownKeys = Badge.__get__("ownKeys")
const _interopRequireWildcard = Badge.__get__("_interopRequireWildcard")
const _objectSpread = Badge.__get__("_objectSpread")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("tag")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("package")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("location")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("used")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("startup")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _getRequireWildcardCache("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ownKeys", () => {
    test("0", () => {
        let result = ownKeys({}, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = ownKeys({}, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = ownKeys(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_interopRequireWildcard", () => {
    test("0", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "port")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\""], "startup")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "add")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "registry")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\""], "role")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_objectSpread", () => {
    test("0", () => {
        let result = _objectSpread({})
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _objectSpread(undefined)
        expect(result).toMatchSnapshot()
    })
})
