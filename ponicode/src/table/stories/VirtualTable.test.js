const VirtualTable = require("../../../../src/table/stories/VirtualTable")
// @ponicode
describe("VirtualTable.default.setValue", () => {
    let inst

    beforeEach(() => {
        inst = new VirtualTable.default()
    })

    test("0", () => {
        let result = inst.setValue(987650)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.setValue(56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.setValue(12345)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = inst.setValue(12)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = inst.setValue("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.setValue(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
