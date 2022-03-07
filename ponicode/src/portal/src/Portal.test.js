const Portal = require("../../../../src/portal/src/Portal")

// @ponicode
describe("Portal.default.render", () => {
    let inst2

    beforeEach(() => {
        inst2 = new Portal.default()
    })

    test("0", () => {
        let result = inst2.render()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("Portal.default.componentWillUnmount", () => {
    let inst2

    beforeEach(() => {
        inst2 = new Portal.default()
    })

    test("0", () => {
        let result = inst2.componentWillUnmount()
        expect(result).toMatchSnapshot()
    })
})
