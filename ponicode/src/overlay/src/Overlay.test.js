const rewire = require("rewire")
const Overlay = rewire("../../../../src/overlay/src/Overlay")
const noop = Overlay.__get__("noop")
const animationStyles = Overlay.__get__("animationStyles")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let result = noop()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("animationStyles", () => {
    test("0", () => {
        let result = animationStyles("rgb(0.1,0.2,0.3)")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = animationStyles("rgb(20%,10%,30%)")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = animationStyles("rgb(0,100,200)")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = animationStyles("green")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = animationStyles("black")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = animationStyles("")
        expect(result).toMatchSnapshot()
    })
})
