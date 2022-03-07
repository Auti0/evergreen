const SmallMinimalExample = require("../../../../commonjs/empty-states/fixtures/SmallMinimalExample")
// @ponicode
describe("SmallMinimalExample.default", () => {
    test("0", () => {
        let object = [[true, false, true, true], [true, true, false, false], [false, true, true, true], [false, true, true, false]]
        let object2 = [[true, true, false, true], [false, false, true, false], [true, false, false, true], [true, false, false, true]]
        let object3 = [[false, true, true, true], [true, true, false, false], [true, false, true, true], [true, true, false, true]]
        let object4 = [[true, true, false, true], [true, false, false, true], [false, true, false, true], [false, false, true, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallMinimalExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [[true, true, false, true], [false, false, true, true], [false, false, false, true], [false, true, false, false]]
        let object2 = [[false, true, false, true], [false, false, true, false], [false, false, true, false], [true, true, true, true]]
        let object3 = [[false, false, false, true], [true, false, true, true], [true, false, true, false], [false, false, false, false]]
        let object4 = [[false, true, false, false], [true, false, true, false], [true, true, false, false], [false, false, false, false]]
        let object5 = [object, object2, object3, object4]
        let result = SmallMinimalExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [[true, true, false, false], [false, true, false, false], [true, true, true, true], [false, true, true, false]]
        let object2 = [[false, false, true, false], [false, true, true, false], [true, false, true, false], [true, true, false, true]]
        let object3 = [[false, true, true, false], [true, true, false, true], [false, true, true, true], [false, false, false, false]]
        let object4 = [[false, false, false, false], [true, true, true, true], [true, false, false, true], [true, false, true, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallMinimalExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [[true, true, true, true], [true, false, false, true], [false, false, true, true], [true, true, true, true]]
        let object2 = [[true, false, false, false], [true, false, true, false], [true, true, false, true], [false, true, true, false]]
        let object3 = [[true, false, true, false], [true, false, true, true], [true, false, false, false], [true, true, true, false]]
        let object4 = [[true, true, false, true], [false, false, false, true], [false, true, false, true], [false, false, true, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallMinimalExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [[true, false, true, false], [true, false, true, false], [false, false, true, false], [true, false, true, false]]
        let object2 = [[false, true, false, false], [true, false, true, true], [true, false, true, true], [false, true, false, false]]
        let object3 = [[false, true, false, true], [false, true, true, true], [true, true, true, false], [false, true, true, true]]
        let object4 = [[false, false, false, false], [true, false, true, false], [false, true, false, true], [true, true, false, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallMinimalExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = SmallMinimalExample.default({ popoverProps: [] })
        expect(result).toMatchSnapshot()
    })
})
