const webpack_config = require("../../.storybook/webpack.config")
// @ponicode
describe("webpack_config", () => {
    test("0", () => {
        let object = [[987650, "a1969970175", 56784, "bc23a9d531064583ace8f67dad60f6bb"], [987650, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 12], ["a1969970175", 987650, "a1969970175", "a1969970175"], ["a1969970175", 12, 987650, "a1969970175"]]
        let result = webpack_config({ config: { plugins: object, module: { rules: "George" } } })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [[56784, "bc23a9d531064583ace8f67dad60f6bb", 12, 987650], [12345, 987650, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], ["a1969970175", "a1969970175", 56784, 12345], [987650, 12, 987650, 12345]]
        let result = webpack_config({ config: { plugins: object, module: { rules: "George" } } })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["a1969970175", 56784, "a1969970175", 12345], ["bc23a9d531064583ace8f67dad60f6bb", 12, 56784, 12], ["bc23a9d531064583ace8f67dad60f6bb", "a1969970175", 987650, "a1969970175"], ["bc23a9d531064583ace8f67dad60f6bb", 987650, 987650, 12345]]
        let result = webpack_config({ config: { plugins: object, module: { rules: "Jean-Philippe" } } })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [[12, 12345, 987650, 12345], [987650, 56784, 12, 987650], ["bc23a9d531064583ace8f67dad60f6bb", 987650, 56784, "bc23a9d531064583ace8f67dad60f6bb"], [12345, 12345, 12345, 12]]
        let result = webpack_config({ config: { plugins: object, module: { rules: "Jean-Philippe" } } })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [[12, 12345, "bc23a9d531064583ace8f67dad60f6bb", 56784], [12, 56784, 12345, "bc23a9d531064583ace8f67dad60f6bb"], [987650, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb", 12], [12345, 12, 56784, 987650]]
        let result = webpack_config({ config: { plugins: object, module: { rules: "Michael" } } })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = webpack_config({ config: { plugins: [], module: { rules: "" } } })
        expect(result).toMatchSnapshot()
    })
})
