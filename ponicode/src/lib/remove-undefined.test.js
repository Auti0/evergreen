const remove_undefined = require("../../../src/lib/remove-undefined")
// @ponicode
describe("remove_undefined.default", () => {
    test("0", () => {
        let result = remove_undefined.default(["Edmond", "Jean-Philippe", "George", "Pierre Edouard"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = remove_undefined.default(["Jean-Philippe", "Edmond", "George", "George"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = remove_undefined.default(["Anas", "Michael", "George", "Edmond"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = remove_undefined.default(["Pierre Edouard", "Michael", "Edmond", "Jean-Philippe"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = remove_undefined.default(["Pierre Edouard", "Jean-Philippe", "Pierre Edouard", "Anas"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = remove_undefined.default([])
        expect(result).toMatchSnapshot()
    })
})
