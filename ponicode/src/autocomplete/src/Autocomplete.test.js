const rewire = require("rewire")
const Autocomplete = rewire("../../../../src/autocomplete/src/Autocomplete")
const noop = Autocomplete.__get__("noop")
const fuzzyFilter = Autocomplete.__get__("fuzzyFilter")
const autocompleteItemRenderer = Autocomplete.__get__("autocompleteItemRenderer")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("fuzzyFilter", () => {
    test("0", () => {
        let result = fuzzyFilter(() => true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = fuzzyFilter(() => false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = fuzzyFilter(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("autocompleteItemRenderer", () => {
    test("0", () => {
        let object = [["Edmond", "Anas", "Jean-Philippe", "Jean-Philippe"], ["Anas", "Pierre Edouard", "Anas", "Anas"], ["Pierre Edouard", "Anas", "Michael", "Anas"], ["Edmond", "Michael", "Jean-Philippe", "Edmond"]]
        let object2 = [["Michael", "Michael", "Jean-Philippe", "Jean-Philippe"], ["Michael", "Michael", "Edmond", "Pierre Edouard"], ["Michael", "Jean-Philippe", "George", "George"], ["Edmond", "Anas", "Jean-Philippe", "Edmond"]]
        let object3 = [["Pierre Edouard", "Edmond", "Michael", "Michael"], ["Anas", "Pierre Edouard", "George", "Jean-Philippe"], ["Michael", "George", "Anas", "Jean-Philippe"], ["Jean-Philippe", "Michael", "Pierre Edouard", "Jean-Philippe"]]
        let object4 = [["Anas", "Anas", "Edmond", "George"], ["Jean-Philippe", "Edmond", "Jean-Philippe", "Michael"], ["George", "Michael", "Michael", "Anas"], ["Jean-Philippe", "Pierre Edouard", "Edmond", "Edmond"]]
        let param1 = [object, object2, object3, object4]
        let result = autocompleteItemRenderer(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["Pierre Edouard", "Anas", "Michael", "Michael"], ["Michael", "Edmond", "Michael", "Edmond"], ["Michael", "Michael", "Pierre Edouard", "Pierre Edouard"], ["Michael", "Edmond", "Edmond", "Jean-Philippe"]]
        let object2 = [["George", "Pierre Edouard", "Jean-Philippe", "Michael"], ["Jean-Philippe", "Jean-Philippe", "Edmond", "Pierre Edouard"], ["Anas", "Anas", "Edmond", "Michael"], ["Pierre Edouard", "George", "Edmond", "Edmond"]]
        let object3 = [["Jean-Philippe", "Michael", "Anas", "Jean-Philippe"], ["Edmond", "Michael", "Anas", "Pierre Edouard"], ["Anas", "Pierre Edouard", "George", "Jean-Philippe"], ["Pierre Edouard", "Pierre Edouard", "Edmond", "Edmond"]]
        let object4 = [["Edmond", "Michael", "Edmond", "Pierre Edouard"], ["George", "George", "Michael", "Jean-Philippe"], ["Anas", "Pierre Edouard", "Pierre Edouard", "Edmond"], ["Anas", "Jean-Philippe", "Michael", "Edmond"]]
        let param1 = [object, object2, object3, object4]
        let result = autocompleteItemRenderer(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["Edmond", "Jean-Philippe", "Edmond", "George"], ["Edmond", "Pierre Edouard", "George", "Pierre Edouard"], ["George", "Edmond", "Jean-Philippe", "Edmond"], ["George", "Edmond", "Edmond", "George"]]
        let object2 = [["Anas", "Jean-Philippe", "Edmond", "Jean-Philippe"], ["Michael", "Edmond", "Anas", "Jean-Philippe"], ["Pierre Edouard", "Pierre Edouard", "Pierre Edouard", "Anas"], ["George", "Michael", "Edmond", "George"]]
        let object3 = [["Anas", "George", "Jean-Philippe", "Pierre Edouard"], ["George", "Pierre Edouard", "Pierre Edouard", "Anas"], ["Pierre Edouard", "Edmond", "George", "Edmond"], ["Michael", "Pierre Edouard", "Michael", "Michael"]]
        let object4 = [["Jean-Philippe", "Jean-Philippe", "Michael", "Jean-Philippe"], ["Anas", "Jean-Philippe", "Jean-Philippe", "Pierre Edouard"], ["Michael", "Jean-Philippe", "Jean-Philippe", "Anas"], ["Michael", "Edmond", "Anas", "Pierre Edouard"]]
        let param1 = [object, object2, object3, object4]
        let result = autocompleteItemRenderer(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["Anas", "George", "Edmond", "Michael"], ["Michael", "Michael", "George", "George"], ["Pierre Edouard", "Jean-Philippe", "George", "George"], ["Michael", "Edmond", "Anas", "Edmond"]]
        let object2 = [["Edmond", "Edmond", "Anas", "Pierre Edouard"], ["Edmond", "Anas", "Edmond", "Jean-Philippe"], ["Anas", "Pierre Edouard", "Michael", "Jean-Philippe"], ["Jean-Philippe", "Pierre Edouard", "Anas", "Michael"]]
        let object3 = [["Pierre Edouard", "Jean-Philippe", "George", "Pierre Edouard"], ["Jean-Philippe", "Edmond", "Pierre Edouard", "Edmond"], ["Michael", "Anas", "Pierre Edouard", "Anas"], ["George", "Pierre Edouard", "Michael", "George"]]
        let object4 = [["George", "Jean-Philippe", "Anas", "Edmond"], ["Anas", "George", "George", "Pierre Edouard"], ["Edmond", "George", "George", "Michael"], ["Jean-Philippe", "Edmond", "George", "Jean-Philippe"]]
        let param1 = [object, object2, object3, object4]
        let result = autocompleteItemRenderer(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["Anas", "Edmond", "Jean-Philippe", "Jean-Philippe"], ["Anas", "Michael", "Anas", "Edmond"], ["Edmond", "Jean-Philippe", "Michael", "Anas"], ["Pierre Edouard", "Jean-Philippe", "Jean-Philippe", "George"]]
        let object2 = [["Michael", "Pierre Edouard", "Jean-Philippe", "Pierre Edouard"], ["Edmond", "Edmond", "Michael", "Michael"], ["George", "Edmond", "Anas", "Anas"], ["George", "Anas", "George", "Pierre Edouard"]]
        let object3 = [["Edmond", "Anas", "Michael", "Edmond"], ["Michael", "Edmond", "Pierre Edouard", "Jean-Philippe"], ["Pierre Edouard", "Anas", "Edmond", "Anas"], ["Michael", "Anas", "Jean-Philippe", "Edmond"]]
        let object4 = [["Pierre Edouard", "George", "Michael", "Anas"], ["Pierre Edouard", "Edmond", "Michael", "Anas"], ["Pierre Edouard", "George", "Edmond", "Jean-Philippe"], ["Michael", "Edmond", "George", "Edmond"]]
        let param1 = [object, object2, object3, object4]
        let result = autocompleteItemRenderer(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = autocompleteItemRenderer([])
        expect(result).toMatchSnapshot()
    })
})
