const AdvancedTable = require('../../../../src/table/stories/AdvancedTable')
// @ponicode
describe('AdvancedTable.default.getIconForOrder', () => {
  let inst

  beforeEach(() => {
    inst = new AdvancedTable.default()
  })

  test('0', () => {
    const result = inst.getIconForOrder(false)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = inst.getIconForOrder(true)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = inst.getIconForOrder(undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('AdvancedTable.default.filter', () => {
  let inst

  beforeEach(() => {
    inst = new AdvancedTable.default()
  })

  test('0', () => {
    const object = [
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
    ]
    const object2 = [
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
    ]
    const object3 = [
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
    ]
    const object4 = [
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
    ]
    const param1 = [object, object2, object3, object4]
    const result = inst.filter(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
    ]
    const object2 = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
    ]
    const object3 = [
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
    ]
    const object4 = [
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
    ]
    const param1 = [object, object2, object3, object4]
    const result = inst.filter(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
    ]
    const object2 = [
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
    ]
    const object3 = [
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
    ]
    const object4 = [
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
    ]
    const param1 = [object, object2, object3, object4]
    const result = inst.filter(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
    ]
    const object2 = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
    ]
    const object3 = [
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
    ]
    const object4 = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
    ]
    const param1 = [object, object2, object3, object4]
    const result = inst.filter(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
    ]
    const object2 = [
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
      ],
      [
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
    ]
    const object3 = [
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
    ]
    const object4 = [
      [
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
      ],
      [
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'LKinAN1FRfbjJXYAEWCbx1H443wbjHip',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
      ],
      [
        '3pxicLBUuEs8qDUKmTABBcWrxzf',
        'MPZf3hhgRxurYDDVsHhDc23nDi',
        'Lq8wLspXaJraZSs3CwiCTF85mkvp',
        '3cBk3sCzB58vfDGAznLJK9KPSnW1',
      ],
    ]
    const param1 = [object, object2, object3, object4]
    const result = inst.filter(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = inst.filter([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('AdvancedTable.default.sort', () => {
  let inst

  beforeEach(() => {
    inst = new AdvancedTable.default()
  })

  test('0', () => {
    const object = [{ slice: () => 256 }, { slice: () => 10 }, { slice: () => 32 }, { slice: () => 0 }]
    const object2 = [{ slice: () => 0 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 16 }]
    const object3 = [{ slice: () => 10 }, { slice: () => 16 }, { slice: () => 10 }, { slice: () => 256 }]
    const object4 = [{ slice: () => 0 }, { slice: () => 64 }, { slice: () => 32 }, { slice: () => 0 }]
    const param1 = [object, object2, object3, object4]
    const result = inst.sort(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [{ slice: () => 16 }, { slice: () => 64 }, { slice: () => 0 }, { slice: () => 64 }]
    const object2 = [{ slice: () => 256 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 64 }]
    const object3 = [{ slice: () => 32 }, { slice: () => 32 }, { slice: () => 256 }, { slice: () => 16 }]
    const object4 = [{ slice: () => 256 }, { slice: () => 16 }, { slice: () => 256 }, { slice: () => 256 }]
    const param1 = [object, object2, object3, object4]
    const result = inst.sort(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [{ slice: () => 10 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 16 }]
    const object2 = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 64 }]
    const object3 = [{ slice: () => 32 }, { slice: () => 64 }, { slice: () => 32 }, { slice: () => 256 }]
    const object4 = [{ slice: () => 32 }, { slice: () => 256 }, { slice: () => 256 }, { slice: () => 32 }]
    const param1 = [object, object2, object3, object4]
    const result = inst.sort(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 256 }, { slice: () => 0 }]
    const object2 = [{ slice: () => 32 }, { slice: () => 64 }, { slice: () => 0 }, { slice: () => 0 }]
    const object3 = [{ slice: () => 32 }, { slice: () => 256 }, { slice: () => 32 }, { slice: () => 16 }]
    const object4 = [{ slice: () => 64 }, { slice: () => 256 }, { slice: () => 64 }, { slice: () => 10 }]
    const param1 = [object, object2, object3, object4]
    const result = inst.sort(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [{ slice: () => 256 }, { slice: () => 32 }, { slice: () => 64 }, { slice: () => 16 }]
    const object2 = [{ slice: () => 64 }, { slice: () => 0 }, { slice: () => 0 }, { slice: () => 32 }]
    const object3 = [{ slice: () => 16 }, { slice: () => 64 }, { slice: () => 10 }, { slice: () => 10 }]
    const object4 = [{ slice: () => 32 }, { slice: () => 16 }, { slice: () => 64 }, { slice: () => 0 }]
    const param1 = [object, object2, object3, object4]
    const result = inst.sort(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = inst.sort([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('AdvancedTable.default.handleFilterChange', () => {
  let inst

  beforeEach(() => {
    inst = new AdvancedTable.default()
  })

  test('0', () => {
    const result = inst.handleFilterChange('Elio')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = inst.handleFilterChange('Dillenberg')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = inst.handleFilterChange('elio@example.com')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = inst.handleFilterChange('')
    expect(result).toMatchSnapshot()
  })
})
