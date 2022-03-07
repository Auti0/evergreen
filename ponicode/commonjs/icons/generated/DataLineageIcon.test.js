const rewire = require("rewire")
const DataLineageIcon = rewire("../../../../commonjs/icons/generated/DataLineageIcon")
const _getRequireWildcardCache = DataLineageIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = DataLineageIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("group")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("function")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("startup")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("role")
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
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "group")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "startup")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\""], "alias")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\""], "parameter")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "account")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
