const extractStyles = require("../../../../src/ssr/src/extractStyles")
// @ponicode
describe("extractStyles.default", () => {
    test("0", () => {
        let result = extractStyles.default({ nonce: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = extractStyles.default({ nonce: "https://api.telegram.org/bot" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = extractStyles.default({ nonce: "http://base.com" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = extractStyles.default({ nonce: "https://croplands.org/app/a/reset?token=" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = extractStyles.default({ nonce: "https://twitter.com/path?abc" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = extractStyles.default({ nonce: "" })
        expect(result).toMatchSnapshot()
    })
})
