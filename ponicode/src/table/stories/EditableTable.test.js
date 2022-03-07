const EditableTable = require("../../../../src/table/stories/EditableTable")
// @ponicode
describe("EditableTable.default.handleSelect", () => {
    let inst

    beforeEach(() => {
        inst = new EditableTable.default()
    })

    test("0", () => {
        let result = inst.handleSelect("7289708e-b17a-477c-8a77-9ab575c4b4d8", { value: "elio@example.com" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.handleSelect("a85a8e6b-348b-4011-a1ec-1e78e9620782", { value: "Elio" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.handleSelect("a85a8e6b-348b-4011-a1ec-1e78e9620782", { value: "elio@example.com" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = inst.handleSelect("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", { value: "elio@example.com" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = inst.handleSelect("7289708e-b17a-477c-8a77-9ab575c4b4d8", { value: "Dillenberg" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.handleSelect("", { value: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("EditableTable.default.handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new EditableTable.default()
    })

    test("0", () => {
        let result = inst.handleChange("7289708e-b17a-477c-8a77-9ab575c4b4d8", "elio@example.com", "elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.handleChange("a85a8e6b-348b-4011-a1ec-1e78e9620782", "elio@example.com", "elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.handleChange("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "Elio", "elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = inst.handleChange("7289708e-b17a-477c-8a77-9ab575c4b4d8", "Elio", "Elio")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = inst.handleChange("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "Elio", "Elio")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.handleChange("", "", "")
        expect(result).toMatchSnapshot()
    })
})
