const rewire = require("rewire")
const Portal = rewire("../../../../commonjs/portal/src/Portal")
const _createSuper = Portal.__get__("_createSuper")
const _isNativeReflectConstruct = Portal.__get__("_isNativeReflectConstruct")
// @ponicode
describe("Portal.default", () => {
    test("0", () => {
        let result = Portal.default()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_createSuper", () => {
    test("0", () => {
        let result = _createSuper(false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _createSuper(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _createSuper(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_isNativeReflectConstruct", () => {
    test("0", () => {
        let result = _isNativeReflectConstruct()
        expect(result).toMatchSnapshot()
    })
})
