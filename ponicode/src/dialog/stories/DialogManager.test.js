const DialogManager = require("../../../../src/dialog/stories/DialogManager")
// @ponicode
describe("DialogManager.default.render", () => {
    let inst

    beforeEach(() => {
        inst = new DialogManager.default()
    })

    test("0", () => {
        let result = inst.render()
        expect(result).toMatchSnapshot()
    })
})
