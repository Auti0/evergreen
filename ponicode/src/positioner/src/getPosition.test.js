const rewire = require('rewire')
const getPosition = rewire('../../../../src/positioner/src/getPosition')
const isAlignedOnTop = getPosition.__get__('isAlignedOnTop')
const flipHorizontal = getPosition.__get__('flipHorizontal')
const isAlignedHorizontal = getPosition.__get__('isAlignedHorizontal')
const getFitsOnBottom = getPosition.__get__('getFitsOnBottom')
const makeRect = getPosition.__get__('makeRect')
const getFitsOnTop = getPosition.__get__('getFitsOnTop')
const getFitsOnLeft = getPosition.__get__('getFitsOnLeft')
const getFitsOnRight = getPosition.__get__('getFitsOnRight')
const getTransformOrigin = getPosition.__get__('getTransformOrigin')
const getRect = getPosition.__get__('getRect')
// @ponicode
describe('isAlignedOnTop', () => {
  test('0', () => {
    const result = isAlignedOnTop(3600)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = isAlignedOnTop(1800)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = isAlignedOnTop(320)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = isAlignedOnTop(9)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = isAlignedOnTop(0.5)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = isAlignedOnTop(-Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('flipHorizontal', () => {
  test('0', () => {
    const result = flipHorizontal(31040)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = flipHorizontal(100)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = flipHorizontal(0.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = flipHorizontal(8)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = flipHorizontal(320)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = flipHorizontal(Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('isAlignedHorizontal', () => {
  test('0', () => {
    const result = isAlignedHorizontal(31040)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = isAlignedHorizontal(8)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = isAlignedHorizontal(31)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = isAlignedHorizontal(0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = isAlignedHorizontal(0.5)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = isAlignedHorizontal(-Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnBottom', () => {
  test('0', () => {
    const result = getFitsOnBottom({ bottom: 9 }, { height: 5 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnBottom({ bottom: 12000 }, { height: 2048 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnBottom({ bottom: 320 }, { height: 255 }, -29.45)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnBottom({ bottom: 150 }, { height: 16 }, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnBottom({ bottom: 64 }, { height: 544 }, 1.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnBottom({ bottom: Infinity }, { height: Infinity }, Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('makeRect', () => {
  test('0', () => {
    const result = makeRect({ height: 40, width: 8 }, { left: 550, top: 48 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = makeRect({ height: 800, width: 100 }, { left: 520, top: 48000 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = makeRect({ height: 200, width: 255 }, { left: 320, top: 5 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = makeRect({ height: 6, width: 20 }, { left: 70, top: 9 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = makeRect({ height: 8, width: 9 }, { left: 410, top: 576 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = makeRect({ height: Infinity, width: Infinity }, { left: Infinity, top: Infinity })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnTop', () => {
  test('0', () => {
    const result = getFitsOnTop({ top: 5 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnTop({ top: 48 }, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnTop({ top: 432 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnTop({ top: 200 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnTop({ top: 24 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnTop({ top: -Infinity }, -Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnLeft', () => {
  test('0', () => {
    const result = getFitsOnLeft({ left: 400 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnLeft({ left: 4 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnLeft({ left: 30 }, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnLeft({ left: 380 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnLeft({ left: 410 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnLeft({ left: Infinity }, Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnRight', () => {
  test('0', () => {
    const result = getFitsOnRight({ right: '18.12.93.94' }, { width: 680 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnRight({ right: '201.100.244.168' }, { width: 1000 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnRight({ right: '18.12.93.94' }, { width: 10 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnRight({ right: '244.9.255.240' }, { width: 24 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnRight({ right: '201.100.244.168' }, { width: 2 }, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnRight({ right: '' }, { width: Infinity }, Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getTransformOrigin', () => {
  test('0', () => {
    const result = getTransformOrigin({
      dimensions: 'Anas',
      position: 1.0,
      rect: { top: 24, left: 400 },
      targetCenter: 70,
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getTransformOrigin({
      dimensions: 'Pierre Edouard',
      position: 2,
      rect: { top: 80.0, left: 70 },
      targetCenter: 50,
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getTransformOrigin({
      dimensions: 'George',
      position: 7,
      rect: { top: 15, left: 100 },
      targetCenter: 4,
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getTransformOrigin({
      dimensions: 'Michael',
      position: 320,
      rect: { top: 40, left: 380 },
      targetCenter: 70,
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getTransformOrigin({
      dimensions: 'Edmond',
      position: 3,
      rect: { top: 40, left: 30 },
      targetCenter: 1,
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getTransformOrigin({
      dimensions: '',
      position: Infinity,
      rect: { top: Infinity, left: Infinity },
      targetCenter: Infinity,
    })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getPosition.default', () => {
  test('0', () => {
    const result = getPosition.default({
      dimensions: '[10, -45.9, 103.5, 0.955674]',
      position: 1,
      targetOffset: 32,
      targetRect: { left: 320, right: -100, top: 6, bottom: 25, height: 2, width: 2 },
      viewport: { left: 550, right: 1, top: 6, bottom: 48, height: 0.0, width: 287 },
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getPosition.default({
      dimensions: '["foo bar",  -0.353, "**text**", 4653]',
      position: 0.5,
      targetOffset: 1,
      targetRect: { left: 1, right: -100, top: 24, bottom: 0.0, height: 2.0, width: 2 },
      viewport: { left: 70, right: 1, top: 48, bottom: 680, height: 10, width: 25 },
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getPosition.default({
      dimensions: '["foo bar",  -0.353, "**text**", 4653]',
      position: 8,
      targetOffset: 512,
      targetRect: { left: 410, right: 0, top: 10, bottom: 2048, height: 1.0, width: 1.0 },
      viewport: { left: 410, right: 100, top: 80.0, bottom: 80.0, height: 432, width: 1.5 },
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getPosition.default({
      dimensions: '[10, -45.9, 103.5, 0.955674]',
      position: 360,
      targetOffset: 2,
      targetRect: { left: 320, right: 1, top: 30, bottom: 1080, height: 2, width: 2 },
      viewport: { left: 4, right: 100, top: 1080, bottom: 2048, height: 24000, width: 544 },
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getPosition.default({
      dimensions: '[-1, 0.5, 1, 2, 3, 4, 5]',
      position: 100,
      targetOffset: 0,
      targetRect: { left: 70, right: 0, top: 80.0, bottom: 287, height: 1, width: 3.0 },
      viewport: { left: 4, right: 100, top: 48000, bottom: 680, height: 10, width: 255 },
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getPosition.default({
      dimensions: '',
      position: -Infinity,
      targetOffset: -Infinity,
      targetRect: {
        left: -Infinity,
        right: -Infinity,
        top: -Infinity,
        bottom: -Infinity,
        height: -Infinity,
        width: -Infinity,
      },
      viewport: {
        left: -Infinity,
        right: -Infinity,
        top: -Infinity,
        bottom: -Infinity,
        height: -Infinity,
        width: -Infinity,
      },
    })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getRect', () => {
  test('0', () => {
    const result = getRect({
      dimensions: { left: 410, width: 1.0, top: 544, height: 2, right: -100, bottom: 320 },
      position: 9,
      targetOffset: 1,
      targetRect: { left: 1, width: 2.0, top: 99, height: 2, right: 1, bottom: 10 },
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getRect({
      dimensions: { left: 410, width: 2, top: 16, height: 2.0, right: 100, bottom: 15 },
      position: 360,
      targetOffset: 4,
      targetRect: { left: 350, width: 3.0, top: 6, height: 2.0, right: -100, bottom: 20 },
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getRect({
      dimensions: { left: 4, width: 1.0, top: 2048, height: 2, right: 0, bottom: 0 },
      position: 320,
      targetOffset: 0,
      targetRect: { left: 1, width: 3, top: 99, height: 2, right: 0, bottom: 24 },
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getRect({
      dimensions: { left: 100, width: 2, top: 320, height: 2, right: -100, bottom: 99 },
      position: 360,
      targetOffset: 1,
      targetRect: { left: 70, width: 2, top: 287, height: 2.0, right: -100, bottom: 40 },
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getRect({
      dimensions: { left: 90, width: 2.0, top: 320, height: 2, right: -5.48, bottom: 12000 },
      position: 3600,
      targetOffset: 32,
      targetRect: { left: 520, width: 3, top: 0.0, height: 2, right: 0, bottom: 1.5 },
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getRect({
      dimensions: {
        left: -Infinity,
        width: -Infinity,
        top: -Infinity,
        height: -Infinity,
        right: -Infinity,
        bottom: -Infinity,
      },
      position: -Infinity,
      targetOffset: -Infinity,
      targetRect: {
        left: -Infinity,
        width: -Infinity,
        top: -Infinity,
        height: -Infinity,
        right: -Infinity,
        bottom: -Infinity,
      },
    })
    expect(result).toMatchSnapshot()
  })
})
