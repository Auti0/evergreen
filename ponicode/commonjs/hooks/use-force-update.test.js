const rewire = require("rewire")
const use_force_update = rewire("../../../commonjs/hooks/use-force-update")
const useForceUpdate = use_force_update.__get__("useForceUpdate")
// @ponicode
describe("useForceUpdate", () => {
    test("0", () => {
        let result = useForceUpdate()
        expect(result).toMatchSnapshot()
    })
})
