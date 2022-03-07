const use_force_update = require("../../../src/hooks/use-force-update")
// @ponicode
describe("use_force_update.useForceUpdate", () => {
    test("0", () => {
        let result = use_force_update.useForceUpdate()
        expect(result).toMatchSnapshot()
    })
})
