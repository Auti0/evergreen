const rewire = require("rewire")
const use_merged_ref = rewire("../../../src/hooks/use-merged-ref")
const setRef = use_merged_ref.__get__("setRef")
// @ponicode
describe("use_merged_ref.useMergedRef", () => {
    test("0", () => {
        let result = use_merged_ref.useMergedRef("George", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = use_merged_ref.useMergedRef("Anas", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = use_merged_ref.useMergedRef("Jean-Philippe", "George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = use_merged_ref.useMergedRef("George", "George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = use_merged_ref.useMergedRef("Pierre Edouard", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = use_merged_ref.useMergedRef("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setRef", () => {
    test("0", () => {
        let result = setRef(() => "Anas", "startup")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = setRef(() => "Pierre Edouard", "parameter")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = setRef(() => "Jean-Philippe", "wasGeneratedBy")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = setRef(() => "Pierre Edouard", "registry")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = setRef(() => "Jean-Philippe", "parameter")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = setRef(() => "", "")
        expect(result).toMatchSnapshot()
    })
})
