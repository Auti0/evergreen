const majorScale = require("./majorScale")
// @ponicode
describe("majorScale.default", () => {
    test("0", () => {
        const result = majorScale.default(2)
        expect(result).toBe(16)
    })

    test("1", () => {
        const callFunction = () => {
            majorScale.default(undefined)
        }
    
        expect(callFunction).toThrow()
    })

    test("2", () => {
        const result = majorScale.default(-1)
        expect(result).toBe(-8)
    })

    test("3", () => {
        const result = majorScale.default(0)
        expect(result).toBe(0)
    })

    test("4", () => {
        const callFunction = () => {
            majorScale.default(1.5)
        }
    
        expect(callFunction).toThrow()
    })
})
