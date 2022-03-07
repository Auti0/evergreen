const AdvancedTable = require("../../../../src/table/stories/AdvancedTable")
// @ponicode
describe("AdvancedTable.default.getIconForOrder", () => {
    let inst

    beforeEach(() => {
        inst = new AdvancedTable.default()
    })

    test("0", () => {
        let result = inst.getIconForOrder(false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.getIconForOrder(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.getIconForOrder(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("AdvancedTable.default.filter", () => {
    let inst

    beforeEach(() => {
        inst = new AdvancedTable.default()
    })

    test("0", () => {
        let object = [["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"]]
        let object2 = [["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"]]
        let object3 = [["3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"]]
        let object4 = [["3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"]]
        let param1 = [object, object2, object3, object4]
        let result = inst.filter(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [["3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"]]
        let object2 = [["MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"]]
        let object3 = [["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi"]]
        let object4 = [["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"]]
        let param1 = [object, object2, object3, object4]
        let result = inst.filter(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [["3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp"]]
        let object2 = [["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "Lq8wLspXaJraZSs3CwiCTF85mkvp"]]
        let object3 = [["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"]]
        let object4 = [["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1"]]
        let param1 = [object, object2, object3, object4]
        let result = inst.filter(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [["MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"]]
        let object2 = [["MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp"]]
        let object3 = [["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3pxicLBUuEs8qDUKmTABBcWrxzf", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"]]
        let object4 = [["MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"]]
        let param1 = [object, object2, object3, object4]
        let result = inst.filter(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [["MPZf3hhgRxurYDDVsHhDc23nDi", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"]]
        let object2 = [["3cBk3sCzB58vfDGAznLJK9KPSnW1", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf"], ["Lq8wLspXaJraZSs3CwiCTF85mkvp", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp"]]
        let object3 = [["3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "MPZf3hhgRxurYDDVsHhDc23nDi", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "MPZf3hhgRxurYDDVsHhDc23nDi", "3cBk3sCzB58vfDGAznLJK9KPSnW1"]]
        let object4 = [["MPZf3hhgRxurYDDVsHhDc23nDi", "3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi"], ["3cBk3sCzB58vfDGAznLJK9KPSnW1", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "3pxicLBUuEs8qDUKmTABBcWrxzf", "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", "Lq8wLspXaJraZSs3CwiCTF85mkvp"], ["3pxicLBUuEs8qDUKmTABBcWrxzf", "MPZf3hhgRxurYDDVsHhDc23nDi", "Lq8wLspXaJraZSs3CwiCTF85mkvp", "3cBk3sCzB58vfDGAznLJK9KPSnW1"]]
        let param1 = [object, object2, object3, object4]
        let result = inst.filter(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.filter([])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("AdvancedTable.default.sort", () => {
    let inst

    beforeEach(() => {
        inst = new AdvancedTable.default()
    })

    test("0", () => {
        let object = [{ slice: () => 256 }, { slice: () => 10 }, { slice: () => 32 }, { slice: () => 0 }]
        let object2 = [{ slice: () => 0 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 16 }]
        let object3 = [{ slice: () => 10 }, { slice: () => 16 }, { slice: () => 10 }, { slice: () => 256 }]
        let object4 = [{ slice: () => 0 }, { slice: () => 64 }, { slice: () => 32 }, { slice: () => 0 }]
        let param1 = [object, object2, object3, object4]
        let result = inst.sort(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object = [{ slice: () => 16 }, { slice: () => 64 }, { slice: () => 0 }, { slice: () => 64 }]
        let object2 = [{ slice: () => 256 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 64 }]
        let object3 = [{ slice: () => 32 }, { slice: () => 32 }, { slice: () => 256 }, { slice: () => 16 }]
        let object4 = [{ slice: () => 256 }, { slice: () => 16 }, { slice: () => 256 }, { slice: () => 256 }]
        let param1 = [object, object2, object3, object4]
        let result = inst.sort(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object = [{ slice: () => 10 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 16 }]
        let object2 = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 64 }]
        let object3 = [{ slice: () => 32 }, { slice: () => 64 }, { slice: () => 32 }, { slice: () => 256 }]
        let object4 = [{ slice: () => 32 }, { slice: () => 256 }, { slice: () => 256 }, { slice: () => 32 }]
        let param1 = [object, object2, object3, object4]
        let result = inst.sort(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 256 }, { slice: () => 0 }]
        let object2 = [{ slice: () => 32 }, { slice: () => 64 }, { slice: () => 0 }, { slice: () => 0 }]
        let object3 = [{ slice: () => 32 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 16 }]
        let object4 = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 64 }, { slice: () => 10 }]
        let param1 = [object, object2, object3, object4]
        let result = inst.sort(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object = [{ slice: () => 256 }, { slice: () => 32 }, { slice: () => 64 }, { slice: () => 16 }]
        let object2 = [{ slice: () => 64 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 32 }]
        let object3 = [{ slice: () => 16 }, { slice: () => 64 }, { slice: () => 10 }, { slice: () => 10 }]
        let object4 = [{ slice: () => 32 }, { slice: () => 16 }, { slice: () => 64 }, { slice: () => 0 }]
        let param1 = [object, object2, object3, object4]
        let result = inst.sort(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = inst.sort([])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("AdvancedTable.default.handleFilterChange", () => {
    let inst

    beforeEach(() => {
        inst = new AdvancedTable.default()
    })

    test("0", () => {
        let result = inst.handleFilterChange("Elio")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = inst.handleFilterChange("Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = inst.handleFilterChange("elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = inst.handleFilterChange("")
        expect(result).toMatchSnapshot()
    })
})
