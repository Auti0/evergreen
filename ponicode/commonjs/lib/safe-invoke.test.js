const rewire = require("rewire")
const safe_invoke = rewire("../../../commonjs/lib/safe-invoke")
const safeInvoke = safe_invoke.__get__("safeInvoke")
// @ponicode
describe("safeInvoke", () => {
    test("0", () => {
        let result = safeInvoke({ apply: () => "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = safeInvoke({ apply: () => "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = safeInvoke({ apply: () => "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = safeInvoke({ apply: () => "George" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = safeInvoke({ apply: () => "" })
        expect(result).toMatchSnapshot()
    })
})
