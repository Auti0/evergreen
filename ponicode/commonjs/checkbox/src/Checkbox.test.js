const rewire = require("rewire")
const Checkbox = rewire("../../../../commonjs/checkbox/src/Checkbox")
const ownKeys = Checkbox.__get__("ownKeys")
const _getRequireWildcardCache = Checkbox.__get__("_getRequireWildcardCache")
const _interopRequireWildcard = Checkbox.__get__("_interopRequireWildcard")
const _objectSpread = Checkbox.__get__("_objectSpread")
const CheckIcon = Checkbox.__get__("CheckIcon")
const noop = Checkbox.__get__("noop")
const MinusIcon = Checkbox.__get__("MinusIcon")
// @ponicode
describe("ownKeys", () => {
    test("0", () => {
        let result = ownKeys({}, false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = ownKeys({}, true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = ownKeys(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_getRequireWildcardCache", () => {
    test("0", () => {
        let result = _getRequireWildcardCache("key")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _getRequireWildcardCache("registry")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _getRequireWildcardCache("used")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _getRequireWildcardCache("effect")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _getRequireWildcardCache("parameter")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _getRequireWildcardCache("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_interopRequireWildcard", () => {
    test("0", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\""], "account")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\""], "location")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "tag")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = _interopRequireWildcard(["\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\""], "alias")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = _interopRequireWildcard(["\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"[3,\"false\",false]\"", "\"{\"x\":[10,null,null,null]}\""], "location")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = _interopRequireWildcard([], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("_objectSpread", () => {
    test("0", () => {
        let result = _objectSpread({})
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = _objectSpread(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("CheckIcon", () => {
    test("0", () => {
        let object = [["George", "Pierre Edouard", "Edmond", "Edmond"], ["Edmond", "Pierre Edouard", "George", "Anas"], ["George", "Michael", "Pierre Edouard", "George"], ["Michael", "Anas", "Pierre Edouard", "Edmond"]]
        let object2 = [["Edmond", "Pierre Edouard", "Edmond", "Michael"], ["Jean-Philippe", "Edmond", "Anas", "Edmond"], ["Michael", "George", "Anas", "Jean-Philippe"], ["Michael", "Anas", "George", "Pierre Edouard"]]
        let object3 = [["George", "Michael", "George", "Jean-Philippe"], ["Edmond", "Anas", "Edmond", "Edmond"], ["Edmond", "George", "Jean-Philippe", "George"], ["Michael", "Anas", "Edmond", "Edmond"]]
        let object4 = [["Edmond", "Edmond", "Michael", "Michael"], ["Pierre Edouard", "Pierre Edouard", "Jean-Philippe", "Pierre Edouard"], ["Edmond", "George", "Pierre Edouard", "Jean-Philippe"], ["Michael", "George", "Edmond", "Jean-Philippe"]]
        let param1 = [object, object2, object3, object4]
        let result = CheckIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["Jean-Philippe", "Jean-Philippe", "Anas", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Michael", "Anas"], ["Anas", "Pierre Edouard", "Edmond", "Pierre Edouard"], ["Pierre Edouard", "Anas", "Jean-Philippe", "Jean-Philippe"]]
        let object2 = [["George", "Anas", "Anas", "George"], ["George", "Edmond", "Pierre Edouard", "Jean-Philippe"], ["Edmond", "Michael", "George", "Anas"], ["Pierre Edouard", "Edmond", "Anas", "Michael"]]
        let object3 = [["George", "Pierre Edouard", "Michael", "Edmond"], ["Anas", "Edmond", "George", "Jean-Philippe"], ["Anas", "Anas", "Edmond", "George"], ["Pierre Edouard", "Pierre Edouard", "Edmond", "Edmond"]]
        let object4 = [["Anas", "Edmond", "Pierre Edouard", "Jean-Philippe"], ["Pierre Edouard", "Michael", "Anas", "Pierre Edouard"], ["Anas", "Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Jean-Philippe", "Edmond"]]
        let param1 = [object, object2, object3, object4]
        let result = CheckIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["Anas", "Jean-Philippe", "Edmond", "Anas"], ["Edmond", "Michael", "George", "Anas"], ["Edmond", "Edmond", "Edmond", "Edmond"], ["Jean-Philippe", "Anas", "Anas", "Jean-Philippe"]]
        let object2 = [["Jean-Philippe", "Jean-Philippe", "Edmond", "George"], ["Edmond", "Jean-Philippe", "George", "Edmond"], ["Anas", "Anas", "Anas", "George"], ["Jean-Philippe", "Michael", "Anas", "Michael"]]
        let object3 = [["Pierre Edouard", "Jean-Philippe", "Jean-Philippe", "Anas"], ["Pierre Edouard", "Jean-Philippe", "Pierre Edouard", "George"], ["Edmond", "Edmond", "George", "Michael"], ["Edmond", "Pierre Edouard", "Pierre Edouard", "Edmond"]]
        let object4 = [["Anas", "Pierre Edouard", "Jean-Philippe", "Jean-Philippe"], ["Pierre Edouard", "Michael", "George", "Michael"], ["Michael", "Anas", "Jean-Philippe", "Anas"], ["Edmond", "Jean-Philippe", "Michael", "Pierre Edouard"]]
        let param1 = [object, object2, object3, object4]
        let result = CheckIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["Edmond", "Anas", "Edmond", "George"], ["Michael", "Jean-Philippe", "George", "Pierre Edouard"], ["George", "Edmond", "Anas", "Edmond"], ["Michael", "Anas", "Pierre Edouard", "George"]]
        let object2 = [["Edmond", "Edmond", "Anas", "George"], ["George", "Anas", "George", "Jean-Philippe"], ["George", "Pierre Edouard", "Anas", "Anas"], ["Jean-Philippe", "Pierre Edouard", "Pierre Edouard", "Anas"]]
        let object3 = [["Michael", "Pierre Edouard", "George", "Edmond"], ["Anas", "George", "Michael", "Edmond"], ["Michael", "Jean-Philippe", "George", "Jean-Philippe"], ["Jean-Philippe", "Jean-Philippe", "Pierre Edouard", "Pierre Edouard"]]
        let object4 = [["George", "Anas", "Jean-Philippe", "Michael"], ["Jean-Philippe", "Anas", "Edmond", "George"], ["Edmond", "Anas", "Jean-Philippe", "Michael"], ["George", "George", "George", "Jean-Philippe"]]
        let param1 = [object, object2, object3, object4]
        let result = CheckIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["Pierre Edouard", "Edmond", "Anas", "Michael"], ["George", "Pierre Edouard", "Pierre Edouard", "Jean-Philippe"], ["Anas", "Michael", "Michael", "Anas"], ["Jean-Philippe", "Jean-Philippe", "George", "Jean-Philippe"]]
        let object2 = [["Pierre Edouard", "Edmond", "George", "Anas"], ["Michael", "Michael", "Edmond", "Anas"], ["Edmond", "George", "Michael", "Edmond"], ["Michael", "Jean-Philippe", "Michael", "Michael"]]
        let object3 = [["Jean-Philippe", "George", "Edmond", "Edmond"], ["Michael", "Michael", "Edmond", "Edmond"], ["George", "George", "Edmond", "Pierre Edouard"], ["Anas", "Michael", "Edmond", "Michael"]]
        let object4 = [["Pierre Edouard", "Michael", "Edmond", "George"], ["Anas", "Michael", "Anas", "Jean-Philippe"], ["Anas", "Anas", "George", "Jean-Philippe"], ["Pierre Edouard", "George", "Jean-Philippe", "Edmond"]]
        let param1 = [object, object2, object3, object4]
        let result = CheckIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = CheckIcon([])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("MinusIcon", () => {
    test("0", () => {
        let object = [["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"]]
        let object2 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let object3 = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let object4 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"]]
        let param1 = [object, object2, object3, object4]
        let result = MinusIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let object2 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        let object3 = [["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let object4 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"]]
        let param1 = [object, object2, object3, object4]
        let result = MinusIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        let object2 = [["[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"], ["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]"]]
        let object3 = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        let object4 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let param1 = [object, object2, object3, object4]
        let result = MinusIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        let object2 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]"]]
        let object3 = [["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]"]]
        let object4 = [["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"]]
        let param1 = [object, object2, object3, object4]
        let result = MinusIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"]]
        let object2 = [["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let object3 = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        let object4 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"]]
        let param1 = [object, object2, object3, object4]
        let result = MinusIcon(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = MinusIcon([])
        expect(result).toMatchSnapshot()
    })
})
