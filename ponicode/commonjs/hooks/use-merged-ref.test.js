const rewire = require("rewire")
const use_merged_ref = rewire("../../../commonjs/hooks/use-merged-ref")
const setRef = use_merged_ref.__get__("setRef")
const useMergedRef = use_merged_ref.__get__("useMergedRef")
// @ponicode
describe("setRef", () => {
    test("0", () => {
        let result = setRef(() => "Jean-Philippe", "location")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = setRef(() => "Michael", "wasGeneratedBy")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = setRef(() => "Edmond", "role")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = setRef(() => "Michael", "startup")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = setRef(() => "Jean-Philippe", "registry")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = setRef(() => "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("useMergedRef", () => {
    test("0", () => {
        let result = useMergedRef("Jean-Philippe", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = useMergedRef("Anas", "George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = useMergedRef("Michael", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = useMergedRef("George", "George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = useMergedRef("Jean-Philippe", "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = useMergedRef("", "")
        expect(result).toMatchSnapshot()
    })
})
