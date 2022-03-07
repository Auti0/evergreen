const rewire = require("rewire")
const use_style_config = rewire("../../../commonjs/hooks/use-style-config")
const _objectSpread = use_style_config.__get__("_objectSpread")
const ownKeys = use_style_config.__get__("ownKeys")
const maybeRun = use_style_config.__get__("maybeRun")
const maybeRunDeep = use_style_config.__get__("maybeRunDeep")
const combineStyles = use_style_config.__get__("combineStyles")
const useMergedStyles = use_style_config.__get__("useMergedStyles")
const useGlamorAndBox = use_style_config.__get__("useGlamorAndBox")
const useStyleConfig = use_style_config.__get__("useStyleConfig")
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
describe("ownKeys", () => {
    test("0", () => {
        let result = ownKeys({}, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = ownKeys({}, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = ownKeys(undefined, undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("maybeRun", () => {
    test("0", () => {
        let result = maybeRun({ apply: () => "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = maybeRun({ apply: () => "Edmond" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = maybeRun({ apply: () => "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = maybeRun({ apply: () => "George" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = maybeRun({ apply: () => "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = maybeRun({ apply: () => "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("maybeRunDeep", () => {
    test("0", () => {
        let result = maybeRunDeep(["./path/to/file", "path/to/folder/", "/path/to/file", "C:\\\\path\\to\\file.ext"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = maybeRunDeep(["C:\\\\path\\to\\folder\\", "path/to/folder/", "./path/to/file", "."])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = maybeRunDeep(["./path/to/file", ".", "path/to/file.ext", "C:\\\\path\\to\\folder\\"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = maybeRunDeep(["/path/to/file", ".", "C:\\\\path\\to\\folder\\", "C:\\\\path\\to\\folder\\"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = maybeRunDeep(["C:\\\\path\\to\\file.ext", "C:\\\\path\\to\\file.ext", ".", "."])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = maybeRunDeep([])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("combineStyles", () => {
    test("0", () => {
        let result = combineStyles("Jean-Philippe", { size: 256, appearance: true }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = combineStyles("Pierre Edouard", { size: 0, appearance: true }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = combineStyles("Edmond", { size: 64, appearance: false }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = combineStyles("Jean-Philippe", { size: 0, appearance: false }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = combineStyles("Michael", { size: 64, appearance: true }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = combineStyles("", { size: -Infinity, appearance: true }, "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("useMergedStyles", () => {
    test("0", () => {
        let object = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object2 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object3 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object4 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let param2 = [object, object2, object3, object4]
        let result = useMergedStyles("George", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object2 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object3 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object4 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let param2 = [object, object2, object3, object4]
        let result = useMergedStyles("Edmond", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object2 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object3 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object4 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let param2 = [object, object2, object3, object4]
        let result = useMergedStyles("Pierre Edouard", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object2 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object3 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object4 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let param2 = [object, object2, object3, object4]
        let result = useMergedStyles("Anas", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object2 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object3 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let object4 = [["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"], ["reply_click()", "reply_click()", "reply_click()", "reply_click()"]]
        let param2 = [object, object2, object3, object4]
        let result = useMergedStyles("Anas", param2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = useMergedStyles("", [], "", false)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("useGlamorAndBox", () => {
    test("0", () => {
        let result = useGlamorAndBox("George", [1000, 10, 10, 1])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = useGlamorAndBox("Edmond", [10, 10, 1000, 1000])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = useGlamorAndBox("George", [10, 10, 1000, 1])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = useGlamorAndBox("Michael", [10, 10, 1, 10])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = useGlamorAndBox("George", [1000, 1000, 1000, 10])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = useGlamorAndBox("", [])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("useStyleConfig", () => {
    test("0", () => {
        let object = [["Anas", "Pierre Edouard", "Michael", "Pierre Edouard"], ["Edmond", "Edmond", "Jean-Philippe", "Anas"], ["Pierre Edouard", "Pierre Edouard", "Pierre Edouard", "Edmond"], ["Edmond", "Jean-Philippe", "Anas", "Jean-Philippe"]]
        let object2 = [["George", "Anas", "Anas", "Edmond"], ["Jean-Philippe", "Edmond", "Anas", "Pierre Edouard"], ["Michael", "Edmond", "George", "Anas"], ["George", "Anas", "Anas", "Pierre Edouard"]]
        let object3 = [["Jean-Philippe", "Michael", "Pierre Edouard", "Edmond"], ["Michael", "George", "Pierre Edouard", "Edmond"], ["George", "Edmond", "Jean-Philippe", "Jean-Philippe"], ["Anas", "George", "Pierre Edouard", "Anas"]]
        let object4 = [["Jean-Philippe", "Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Michael", "Pierre Edouard"], ["Pierre Edouard", "Jean-Philippe", "Edmond", "Pierre Edouard"], ["Jean-Philippe", "George", "Pierre Edouard", "Pierre Edouard"]]
        let param2 = [object, object2, object3, object4]
        let param3 = [["user123", "user_name", "user name", "user123"], ["username", "user123", "username", "123"], ["user123", "user123", "user_name", "user_name"], ["123", "username", "user name", "123"]]
        let result = useStyleConfig("Jean-Philippe", param2, param3, false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["George", "Michael", "George", "Edmond"], ["Michael", "Anas", "Michael", "Pierre Edouard"], ["Pierre Edouard", "Pierre Edouard", "Jean-Philippe", "Jean-Philippe"], ["Michael", "Michael", "Jean-Philippe", "George"]]
        let object2 = [["Anas", "Edmond", "Edmond", "Anas"], ["Anas", "Pierre Edouard", "Edmond", "Michael"], ["Jean-Philippe", "Anas", "George", "George"], ["Edmond", "Anas", "Edmond", "Pierre Edouard"]]
        let object3 = [["George", "Michael", "Edmond", "Michael"], ["George", "Pierre Edouard", "George", "Pierre Edouard"], ["Jean-Philippe", "Pierre Edouard", "Michael", "Michael"], ["Michael", "Anas", "Pierre Edouard", "Anas"]]
        let object4 = [["George", "Anas", "Jean-Philippe", "Jean-Philippe"], ["Anas", "Edmond", "George", "Jean-Philippe"], ["Pierre Edouard", "Michael", "Pierre Edouard", "Jean-Philippe"], ["Jean-Philippe", "Michael", "Jean-Philippe", "George"]]
        let param2 = [object, object2, object3, object4]
        let param3 = [["username", "user123", "user-name", "user_name"], ["user name", "user123", "user_name", "user_name"], ["user123", "user name", "username", "123"], ["user_name", "user123", "user-name", "username"]]
        let result = useStyleConfig("Edmond", param2, param3, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["Pierre Edouard", "George", "George", "Jean-Philippe"], ["Michael", "Anas", "Pierre Edouard", "Jean-Philippe"], ["George", "George", "Edmond", "Michael"], ["Edmond", "Jean-Philippe", "Michael", "Anas"]]
        let object2 = [["Michael", "Pierre Edouard", "George", "Michael"], ["Anas", "Michael", "George", "Michael"], ["Michael", "Jean-Philippe", "Edmond", "George"], ["Edmond", "Anas", "Anas", "Pierre Edouard"]]
        let object3 = [["Jean-Philippe", "Anas", "Pierre Edouard", "Anas"], ["Michael", "Jean-Philippe", "Edmond", "Michael"], ["Michael", "Edmond", "George", "Michael"], ["George", "George", "Pierre Edouard", "Michael"]]
        let object4 = [["Anas", "Anas", "Anas", "Jean-Philippe"], ["George", "Jean-Philippe", "Jean-Philippe", "Anas"], ["Jean-Philippe", "Jean-Philippe", "George", "Jean-Philippe"], ["Michael", "Michael", "Pierre Edouard", "Edmond"]]
        let param2 = [object, object2, object3, object4]
        let param3 = [["123", "user-name", "user123", "username"], ["username", "username", "username", "username"], ["123", "user_name", "user_name", "user name"], ["user name", "username", "user-name", "user_name"]]
        let result = useStyleConfig("George", param2, param3, true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["Pierre Edouard", "Jean-Philippe", "George", "Michael"], ["George", "George", "Michael", "George"], ["Michael", "Michael", "Anas", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Pierre Edouard", "Michael"]]
        let object2 = [["Michael", "Pierre Edouard", "Michael", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Pierre Edouard", "Pierre Edouard"], ["Edmond", "Anas", "Edmond", "Michael"], ["Anas", "Anas", "Anas", "Edmond"]]
        let object3 = [["George", "Anas", "Jean-Philippe", "Anas"], ["George", "Pierre Edouard", "Edmond", "Anas"], ["Jean-Philippe", "Jean-Philippe", "Michael", "Pierre Edouard"], ["Pierre Edouard", "Anas", "Edmond", "Edmond"]]
        let object4 = [["Jean-Philippe", "Anas", "Michael", "George"], ["Pierre Edouard", "George", "George", "Pierre Edouard"], ["George", "Pierre Edouard", "Pierre Edouard", "George"], ["Pierre Edouard", "Jean-Philippe", "Pierre Edouard", "Edmond"]]
        let param2 = [object, object2, object3, object4]
        let param3 = [["user123", "username", "user123", "123"], ["123", "user name", "user123", "user_name"], ["user_name", "user_name", "user123", "user123"], ["user123", "123", "user_name", "user_name"]]
        let result = useStyleConfig("Michael", param2, param3, false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["Jean-Philippe", "Jean-Philippe", "Pierre Edouard", "Anas"], ["George", "Edmond", "George", "Anas"], ["Edmond", "Pierre Edouard", "Pierre Edouard", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Michael", "Pierre Edouard"]]
        let object2 = [["Edmond", "Pierre Edouard", "Edmond", "Jean-Philippe"], ["Anas", "Michael", "George", "Pierre Edouard"], ["Jean-Philippe", "Jean-Philippe", "Jean-Philippe", "Jean-Philippe"], ["Anas", "Michael", "Pierre Edouard", "Pierre Edouard"]]
        let object3 = [["Edmond", "Edmond", "George", "Anas"], ["Anas", "Edmond", "George", "Anas"], ["Michael", "Pierre Edouard", "Edmond", "Pierre Edouard"], ["Michael", "Pierre Edouard", "Pierre Edouard", "Edmond"]]
        let object4 = [["Anas", "Michael", "George", "Anas"], ["Anas", "Pierre Edouard", "Anas", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Anas", "Pierre Edouard"], ["Anas", "Michael", "George", "Anas"]]
        let param2 = [object, object2, object3, object4]
        let param3 = [["user-name", "user name", "username", "123"], ["user_name", "user name", "user name", "user_name"], ["user123", "user name", "user_name", "username"], ["user name", "user_name", "user name", "user name"]]
        let result = useStyleConfig("George", param2, param3, false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = useStyleConfig("", [], [], false)
        expect(result).toMatchSnapshot()
    })
})
