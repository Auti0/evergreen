const rewire = require("rewire")
const Dialog = rewire("../../../../commonjs/dialog/src/Dialog")
const ownKeys = Dialog.__get__("ownKeys")
const _getRequireWildcardCache = Dialog.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = Dialog.__get__("_interopRequireWildcard")
const _objectSpread = Dialog.__get__("_objectSpread")
const closeHandler = Dialog.__get__("closeHandler")
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
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("port")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("accounts")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("effect")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("role")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("package")
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
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "parameter")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "accounts")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\""], "location")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "value")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "registry")
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

// @ponicode
describe("closeHandler", () => {
    test("0", () => {
        let result = closeHandler(() => "https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = closeHandler(() => "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = closeHandler(() => "https://")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = closeHandler(() => "ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = closeHandler(() => "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = closeHandler(() => "")
        expect(result).toMatchSnapshot()
    })
})
