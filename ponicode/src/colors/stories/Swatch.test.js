const rewire = require("rewire")
const Swatch = rewire("../../../../src/colors/stories/Swatch")
const uppercaseColor = Swatch.__get__("uppercaseColor")
// @ponicode
describe("uppercaseColor", () => {
    test("0", () => {
        let result = uppercaseColor(["#", "#", "#", "#"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = uppercaseColor(["#FF00FF", "rgb(0,100,200)", "#FF00FF", "rgb(0,100,200)"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = uppercaseColor(["green", "hsl(10%,20%,40%)", "#FF00FF", "hsl(10%,20%,40%)"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = uppercaseColor(["red", "#FF00FF", "hsl(10%,20%,40%)", "black"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = uppercaseColor(["#FF00FF", "#", "rgb(0.1,0.2,0.3)", "black"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = uppercaseColor([])
        expect(result).toMatchSnapshot()
    })
})
