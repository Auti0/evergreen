const manageTableCellFocusInteraction = require("../../../../src/table/src/manageTableCellFocusInteraction")
// @ponicode
describe("manageTableCellFocusInteraction.default", () => {
    test("0", () => {
        let object2 = [["Jean-Philippe", "Edmond", "Pierre Edouard", "Jean-Philippe"], ["George", "Jean-Philippe", "Edmond", "Pierre Edouard"], ["Pierre Edouard", "Michael", "Edmond", "George"], ["Edmond", "Jean-Philippe", "Anas", "George"]]
        let object = [["George", "Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], ["Michael", "Anas", "Jean-Philippe", "Jean-Philippe"], ["Anas", "Anas", "Michael", "George"], ["Pierre Edouard", "Pierre Edouard", "Anas", "Pierre Edouard"]]
        let result = manageTableCellFocusInteraction.default("ArrowUp", { parentElement: { children: object, parentElement: { children: object2 } } })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object2 = [["George", "Michael", "George", "Edmond"], ["Edmond", "Jean-Philippe", "Jean-Philippe", "Jean-Philippe"], ["Anas", "George", "George", "Pierre Edouard"], ["Edmond", "Michael", "Anas", "Michael"]]
        let object = [["Pierre Edouard", "Anas", "Michael", "George"], ["Pierre Edouard", "George", "Anas", "Jean-Philippe"], ["Anas", "Anas", "Jean-Philippe", "Pierre Edouard"], ["Michael", "Michael", "Pierre Edouard", "Michael"]]
        let result = manageTableCellFocusInteraction.default("ArrowUp", { parentElement: { children: object, parentElement: { children: object2 } } })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object2 = [["Pierre Edouard", "Michael", "Michael", "Pierre Edouard"], ["George", "Edmond", "Michael", "Michael"], ["Anas", "Anas", "Anas", "George"], ["Jean-Philippe", "Jean-Philippe", "Pierre Edouard", "George"]]
        let object = [["Michael", "Pierre Edouard", "Michael", "Edmond"], ["Jean-Philippe", "Jean-Philippe", "George", "Michael"], ["Anas", "Michael", "Jean-Philippe", "Jean-Philippe"], ["Michael", "Michael", "Pierre Edouard", "Edmond"]]
        let result = manageTableCellFocusInteraction.default("ArrowLeft", { parentElement: { children: object, parentElement: { children: object2 } } })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object2 = [["Michael", "Edmond", "George", "Jean-Philippe"], ["Edmond", "Pierre Edouard", "Edmond", "George"], ["Anas", "Anas", "Anas", "Edmond"], ["Jean-Philippe", "Jean-Philippe", "George", "Anas"]]
        let object = [["Jean-Philippe", "Michael", "Michael", "Pierre Edouard"], ["Jean-Philippe", "Jean-Philippe", "Edmond", "Jean-Philippe"], ["Edmond", "Jean-Philippe", "Edmond", "Pierre Edouard"], ["Pierre Edouard", "Edmond", "Edmond", "Pierre Edouard"]]
        let result = manageTableCellFocusInteraction.default("ArrowUp", { parentElement: { children: object, parentElement: { children: object2 } } })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object2 = [["Pierre Edouard", "Pierre Edouard", "Anas", "Jean-Philippe"], ["Edmond", "Michael", "Anas", "Michael"], ["Anas", "Anas", "Michael", "Jean-Philippe"], ["Jean-Philippe", "Anas", "Anas", "Michael"]]
        let object = [["Anas", "George", "Jean-Philippe", "Michael"], ["Michael", "Jean-Philippe", "Edmond", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Pierre Edouard", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Edmond", "Michael"]]
        let result = manageTableCellFocusInteraction.default("ArrowUp", { parentElement: { children: object, parentElement: { children: object2 } } })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = manageTableCellFocusInteraction.default("", { parentElement: { children: [], parentElement: { children: [] } } })
        expect(result).toMatchSnapshot()
    })
})
