const rewire = require("rewire")
const MapMarkerIcon = rewire("../../../../commonjs/icons/generated/MapMarkerIcon")
const _getRequireWildcardCache = MapMarkerIcon.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = MapMarkerIcon.__get__("_interopRequireWildcard")
// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("alias")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("effect")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("location")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("used")
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
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":[10,null,null,null]}\""], "function")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "tag")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\""], "add")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "key")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"{\"x\":[10,null,null,null]}\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "parameter")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})
