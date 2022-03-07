const manageTableRowFocusInteraction = require("../../../../src/table/src/manageTableRowFocusInteraction")
// @ponicode
describe("manageTableRowFocusInteraction.default", () => {
    test("0", () => {
        let result = manageTableRowFocusInteraction.default("ArrowUp", { parentElement: { children: true } })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = manageTableRowFocusInteraction.default("ArrowDown", { parentElement: { children: true } })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = manageTableRowFocusInteraction.default("ArrowDown", { parentElement: { children: false } })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = manageTableRowFocusInteraction.default("ArrowUp", { parentElement: { children: false } })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = manageTableRowFocusInteraction.default("elio@example.com", { parentElement: { children: false } })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = manageTableRowFocusInteraction.default("", { parentElement: { children: true } })
        expect(result).toMatchSnapshot()
    })
})
