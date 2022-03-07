const SmallExample = require("../../../../commonjs/empty-states/fixtures/SmallExample")
// @ponicode
describe("SmallExample.default", () => {
    test("0", () => {
        let object = [[true, false, false, true], [false, false, true, true], [false, false, true, true], [true, false, false, false]]
        let object2 = [[false, true, false, false], [true, true, false, true], [false, false, true, true], [true, true, false, true]]
        let object3 = [[false, true, true, true], [false, true, false, false], [true, false, true, false], [false, true, true, true]]
        let object4 = [[true, true, false, false], [false, true, true, false], [true, true, true, true], [false, false, false, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [[false, true, false, true], [false, true, true, false], [false, false, false, true], [false, false, false, true]]
        let object2 = [[true, true, false, false], [true, false, true, true], [true, false, false, true], [true, true, false, true]]
        let object3 = [[false, false, true, true], [true, false, false, false], [false, false, true, false], [true, true, false, true]]
        let object4 = [[false, false, true, true], [false, false, true, true], [true, false, true, false], [false, true, true, false]]
        let object5 = [object, object2, object3, object4]
        let result = SmallExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [[false, false, true, false], [true, true, true, true], [true, true, false, true], [false, false, true, false]]
        let object2 = [[false, true, true, true], [true, true, true, true], [false, false, false, true], [false, true, false, true]]
        let object3 = [[true, true, false, false], [true, false, true, true], [false, false, true, true], [true, false, false, true]]
        let object4 = [[false, true, true, true], [false, true, true, true], [false, true, false, true], [false, false, true, false]]
        let object5 = [object, object2, object3, object4]
        let result = SmallExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [[false, false, false, true], [true, false, false, true], [false, true, false, true], [false, false, true, false]]
        let object2 = [[true, true, true, false], [false, true, true, false], [false, false, false, false], [true, false, false, false]]
        let object3 = [[false, true, false, true], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
        let object4 = [[true, false, false, false], [true, false, false, true], [true, true, true, true], [false, true, true, false]]
        let object5 = [object, object2, object3, object4]
        let result = SmallExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [[false, true, false, false], [true, true, true, false], [true, false, true, false], [false, false, true, false]]
        let object2 = [[true, true, false, true], [false, false, false, false], [true, false, false, true], [false, false, true, false]]
        let object3 = [[true, false, false, true], [false, false, true, true], [true, true, false, true], [false, false, true, false]]
        let object4 = [[true, false, false, false], [true, true, false, true], [true, true, false, false], [false, false, true, true]]
        let object5 = [object, object2, object3, object4]
        let result = SmallExample.default({ popoverProps: object5 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = SmallExample.default({ popoverProps: [] })
        expect(result).toMatchSnapshot()
    })
})
