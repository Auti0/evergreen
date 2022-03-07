const autoHydrate = require("../../../../src/ssr/src/autoHydrate")
// @ponicode
describe("autoHydrate.default", () => {
    test("0", () => {
        let result = autoHydrate.default()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("autoHydrate.hydrate", () => {
    test("0", () => {
        let object = [[false, false, true, true], [true, true, false, true], [false, false, true, false], [false, true, true, true]]
        let object2 = [[false, false, false, true], [false, true, false, true], [true, true, true, false], [true, false, false, false]]
        let object3 = [[true, false, false, false], [false, true, true, true], [false, true, true, false], [false, false, false, true]]
        let object4 = [[true, true, true, true], [false, false, false, true], [false, false, false, true], [true, false, false, false]]
        let object5 = [object, object2, object3, object4]
        let result = autoHydrate.hydrate({ uiBoxCache: "1.0.0", glamorIds: object5 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [[true, true, false, false], [true, true, true, true], [true, true, false, false], [false, true, true, false]]
        let object2 = [[true, true, false, false], [false, false, false, false], [true, true, false, false], [true, false, false, true]]
        let object3 = [[false, true, false, false], [false, true, false, true], [true, false, true, true], [true, false, true, true]]
        let object4 = [[false, true, true, true], [false, false, true, true], [true, true, false, false], [true, false, false, true]]
        let object5 = [object, object2, object3, object4]
        let result = autoHydrate.hydrate({ uiBoxCache: "^5.0.0", glamorIds: object5 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [[true, true, true, false], [true, true, false, false], [true, false, false, true], [false, true, false, false]]
        let object2 = [[true, false, true, true], [false, false, false, false], [true, true, false, false], [false, false, true, true]]
        let object3 = [[true, false, true, true], [false, false, false, false], [false, false, false, true], [true, true, false, false]]
        let object4 = [[true, false, true, false], [false, true, false, false], [true, true, false, false], [true, true, false, false]]
        let object5 = [object, object2, object3, object4]
        let result = autoHydrate.hydrate({ uiBoxCache: "v1.2.4", glamorIds: object5 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [[false, true, true, false], [false, false, true, true], [false, false, true, false], [true, true, true, false]]
        let object2 = [[true, false, false, true], [false, true, true, false], [true, false, true, true], [false, false, false, true]]
        let object3 = [[false, false, true, true], [false, false, false, false], [true, true, false, true], [true, false, true, true]]
        let object4 = [[false, true, true, true], [false, false, false, true], [false, false, true, true], [true, true, false, true]]
        let object5 = [object, object2, object3, object4]
        let result = autoHydrate.hydrate({ uiBoxCache: "^5.0.0", glamorIds: object5 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [[false, true, true, false], [true, false, true, false], [true, true, true, true], [false, true, false, false]]
        let object2 = [[true, true, false, true], [false, false, true, true], [true, false, false, true], [true, false, false, false]]
        let object3 = [[true, true, true, true], [true, false, false, false], [false, true, true, false], [false, false, true, false]]
        let object4 = [[true, false, false, false], [false, false, true, false], [true, true, true, false], [false, false, true, false]]
        let object5 = [object, object2, object3, object4]
        let result = autoHydrate.hydrate({ uiBoxCache: "v1.2.4", glamorIds: object5 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = autoHydrate.hydrate({ uiBoxCache: "", glamorIds: [] })
        expect(result).toMatchSnapshot()
    })
})
