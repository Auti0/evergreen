const rewire = require("rewire")
const CornerDialog = rewire("../../../../commonjs/corner-dialog/src/CornerDialog")
const _getRequireWildcardCache = CornerDialog.__get__("_getRequireWildcardCache")
const closeHandler = CornerDialog.__get__("closeHandler")
const _interopRequireWildcard = CornerDialog.__get__("_interopRequireWildcard")
const noop = CornerDialog.__get__("noop")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("account")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("startup")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("wasGeneratedBy")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("function")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _getRequireWildcardCache("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("closeHandler", () => {
    test("0", () => {
        let result = closeHandler(() => "https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = closeHandler(() => "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = closeHandler(() => "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = closeHandler(() => "https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = closeHandler(() => "ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = closeHandler(() => "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_interopRequireWildcard", () => {
    test("0", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\""], "value")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\""], "parameter")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\""], "accounts")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\""], "registry")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "used")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})
