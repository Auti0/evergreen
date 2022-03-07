const rewire = require("rewire")
const TextDropdownButton = rewire("../../../../commonjs/buttons/src/TextDropdownButton")
const ownKeys = TextDropdownButton.__get__("ownKeys")
const _getRequireWildcardCache = TextDropdownButton.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = TextDropdownButton.__get__("_interopRequireWildcard")
const _objectSpread = TextDropdownButton.__get__("_objectSpread")
// @ponicode
describe("ownKeys", () => {
    test("0", () => {
        let result = ownKeys({}, false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = ownKeys({}, true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = ownKeys(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("tag")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("action")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("effect")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("wasGeneratedBy")
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
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\""], "used")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "registry")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\""], "effect")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "account")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\""], "accounts")
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
