const rewire = require('rewire')
const getPosition = rewire('../../../../commonjs/positioner/src/getPosition')
const isAlignedOnTop = getPosition.__get__('isAlignedOnTop')
const flipHorizontal = getPosition.__get__('flipHorizontal')
const makeRect = getPosition.__get__('makeRect')
const isAlignedHorizontal = getPosition.__get__('isAlignedHorizontal')
const getFitsOnBottom = getPosition.__get__('getFitsOnBottom')
const getFitsOnTop = getPosition.__get__('getFitsOnTop')
const getFitsOnLeft = getPosition.__get__('getFitsOnLeft')
const getFitsOnRight = getPosition.__get__('getFitsOnRight')
const getTransformOrigin = getPosition.__get__('getTransformOrigin')
const getFittedPosition = getPosition.__get__('getFittedPosition')
const getRect = getPosition.__get__('getRect')
// @ponicode
describe('isAlignedOnTop', () => {
  test('0', () => {
    const result = isAlignedOnTop(0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = isAlignedOnTop(4)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = isAlignedOnTop(0.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = isAlignedOnTop(8)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = isAlignedOnTop(31040)
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
    const result = flipHorizontal(1800)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = flipHorizontal(360)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = flipHorizontal(1.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = flipHorizontal(0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = flipHorizontal(31040)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = flipHorizontal(Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('makeRect', () => {
  test('0', () => {
    const result = makeRect({ height: 320, width: 5 }, { left: 380, top: 400 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = makeRect({ height: 16, width: 0 }, { left: 4, top: 64 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = makeRect({ height: 48, width: 80.0 }, { left: 50, top: 287 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = makeRect({ height: 480, width: 40 }, { left: 410, top: 24 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = makeRect({ height: 20, width: 99 }, { left: 350, top: 432 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = makeRect({ height: -Infinity, width: -Infinity }, { left: -Infinity, top: -Infinity })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('isAlignedHorizontal', () => {
  test('0', () => {
    const result = isAlignedHorizontal(180)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = isAlignedHorizontal(3)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = isAlignedHorizontal(9)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = isAlignedHorizontal(100)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = isAlignedHorizontal(7)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = isAlignedHorizontal(NaN)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnBottom', () => {
  test('0', () => {
    const result = getFitsOnBottom({ bottom: 10 }, { height: 100 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnBottom({ bottom: 6 }, { height: 12 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnBottom({ bottom: 99 }, { height: 40 }, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnBottom({ bottom: 2048 }, { height: 10 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnBottom({ bottom: 320 }, { height: 16 }, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnBottom({ bottom: Infinity }, { height: Infinity }, Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFitsOnTop', () => {
  test('0', () => {
    const result = getFitsOnTop({ top: 200 }, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnTop({ top: 80.0 }, 1.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnTop({ top: 680 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnTop({ top: 6 }, -29.45)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnTop({ top: 390 }, 10.23)
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
    const result = getFitsOnLeft({ left: 50 }, -29.45)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnLeft({ left: 1 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnLeft({ left: 30 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnLeft({ left: 550 }, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnLeft({ left: 90 }, 10.0)
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
    const result = getFitsOnRight({ right: '240.159.249.190' }, { width: 25 }, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFitsOnRight({ right: '18.12.93.94' }, { width: 12 }, -1.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFitsOnRight({ right: '240.159.249.190' }, { width: 544 }, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFitsOnRight({ right: '244.9.255.240' }, { width: 1000 }, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFitsOnRight({ right: '240.159.249.190' }, { width: 16 }, 1.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFitsOnRight({ right: '' }, { width: -Infinity }, -Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getTransformOrigin', () => {
  test('0', () => {
    const object = [
      [255, 0.5, 16, 0.5],
      [576, 1080, 24000, 8],
      [0.0, 1000, 24000, 0.0],
      [390, 0, 432, 6],
    ]
    const result = getTransformOrigin({
      dimensions: { width: object, height: 432 },
      position: 8,
      LEFT: 100,
      RIGHT: 100,
      rect: { targetCenter: 410, top: 680, left: -100 },
      targetCenter: 520,
      top: 432,
      left: -100,
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [390, 64, 720, 100],
      [24000, 100, 48, 0],
      [1.5, 400, 100, 150],
      [64, 0.5, 40, 544],
    ]
    const result = getTransformOrigin({
      dimensions: { width: object, height: 720 },
      position: 4,
      LEFT: -5.48,
      RIGHT: -5.48,
      rect: { targetCenter: 410, top: 48000, left: -100 },
      targetCenter: 1,
      top: 400,
      left: 0,
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [200, 120, 10, 2048],
      [80.0, 320, 30, 287],
      [287, 25, 64, 120],
      [8, 30, 0, 680],
    ]
    const result = getTransformOrigin({
      dimensions: { width: object, height: 544 },
      position: 7,
      LEFT: 1,
      RIGHT: -100,
      rect: { targetCenter: 350, top: 15, left: 1 },
      targetCenter: 320,
      top: 544,
      left: -5.48,
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [287, 576, 9, 6],
      [390, 400, 390, 0],
      [0.5, 8, 800, 0],
      [2, 16, 0.5, 80.0],
    ]
    const result = getTransformOrigin({
      dimensions: { width: object, height: 255 },
      position: 31040,
      LEFT: -5.48,
      RIGHT: 0,
      rect: { targetCenter: 100, top: 40, left: 1 },
      targetCenter: 320,
      top: 1080,
      left: -5.48,
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [120, 544, 150, 99],
      [400, 0, 576, 48000],
      [8, 544, 20, 80.0],
      [20, 680, 680, 390],
    ]
    const result = getTransformOrigin({
      dimensions: { width: object, height: 15 },
      position: 1.0,
      LEFT: 100,
      RIGHT: 100,
      rect: { targetCenter: 100, top: 40, left: 100 },
      targetCenter: 520,
      top: 40,
      left: -100,
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getTransformOrigin({
      dimensions: { width: [], height: NaN },
      position: NaN,
      LEFT: NaN,
      RIGHT: NaN,
      rect: { targetCenter: NaN, top: NaN, left: NaN },
      targetCenter: NaN,
      top: NaN,
      left: NaN,
    })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getFittedPosition', () => {
  test('0', () => {
    const result = getFittedPosition({
      dimensions: false,
      position: 31,
      targetOffset: 18,
      targetRect: { left: 100, right: 1, top: 8, bottom: 1000, height: 3.0, width: 2 },
      viewport: { left: 4, right: 100, top: 12, bottom: 10, height: 64, width: 48000 },
      viewportOffset: 10.23,
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getFittedPosition({
      dimensions: true,
      position: 31040,
      targetOffset: 2,
      targetRect: { left: 1, right: -5.48, top: 400, bottom: 48000, height: 2.0, width: 3 },
      viewport: { left: 380, right: 100, top: 6, bottom: 720, height: 9, width: 100 },
      viewportOffset: 0.5,
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getFittedPosition({
      dimensions: false,
      position: 31,
      targetOffset: 2,
      targetRect: { left: 320, right: -100, top: 0, bottom: 48000, height: 2, width: 3.0 },
      viewport: { left: 4, right: 100, top: 255, bottom: 10, height: 255, width: 390 },
      viewportOffset: 0.0,
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getFittedPosition({
      dimensions: false,
      position: 2,
      targetOffset: 32,
      targetRect: { left: 100, right: -5.48, top: 24000, bottom: 576, height: 1, width: 1 },
      viewport: { left: 1, right: 1, top: 255, bottom: 800, height: 12, width: 1.5 },
      viewportOffset: 10.0,
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getFittedPosition({
      dimensions: true,
      position: 1.0,
      targetOffset: 2,
      targetRect: { left: 4, right: -100, top: 480, bottom: 0.5, height: 1.0, width: 2 },
      viewport: { left: 400, right: 0, top: 0, bottom: 720, height: 150, width: 544 },
      viewportOffset: 10.23,
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getFittedPosition({
      dimensions: false,
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
      viewportOffset: -Infinity,
    })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getRect', () => {
  test('0', () => {
    const result = getRect({
      left: 400,
      width: 120,
      top: 390,
      height: 6,
      right: -5.48,
      targetOffset: 32,
      bottom: 16,
      dimensions: { left: 410, width: 3.0, top: 99, height: 3, right: 1, targetOffset: 32, bottom: 1.5 },
      position: 9,
      targetRect: { left: 1, width: 2.0, top: 720, height: 2, right: -100, targetOffset: 18, bottom: 0 },
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getRect({
      left: 30,
      width: 0.5,
      top: 25,
      height: 10,
      right: 100,
      targetOffset: 32,
      bottom: 48000,
      dimensions: { left: 30, width: 3.0, top: 1080, height: 2, right: -5.48, targetOffset: 1, bottom: 100 },
      position: 0,
      targetRect: { left: 350, width: 1.0, top: 390, height: 1, right: -100, targetOffset: 0, bottom: 390 },
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getRect({
      left: 50,
      width: 255,
      top: 15,
      height: 10,
      right: -100,
      targetOffset: 512,
      bottom: 80.0,
      dimensions: { left: 350, width: 2, top: 99, height: 2, right: -5.48, targetOffset: 0, bottom: 576 },
      position: 1800,
      targetRect: { left: 400, width: 2, top: 8, height: 2, right: 100, targetOffset: 2, bottom: 0.5 },
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getRect({
      left: 350,
      width: 15,
      top: 150,
      height: 99,
      right: 100,
      targetOffset: 512,
      bottom: 287,
      dimensions: { left: 350, width: 2.0, top: 1000, height: 2, right: -5.48, targetOffset: 4, bottom: 30 },
      position: 2,
      targetRect: { left: 320, width: 1, top: 99, height: 2, right: 100, targetOffset: 4, bottom: 8 },
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getRect({
      left: 4,
      width: 255,
      top: 30,
      height: 2,
      right: -100,
      targetOffset: 512,
      bottom: 48000,
      dimensions: { left: 400, width: 1.0, top: 287, height: 1, right: -100, targetOffset: 4, bottom: 24000 },
      position: 2,
      targetRect: { left: 400, width: 2, top: 5, height: 1.0, right: 0, targetOffset: 1, bottom: 0.5 },
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getRect({
      left: -Infinity,
      width: -Infinity,
      top: -Infinity,
      height: -Infinity,
      right: -Infinity,
      targetOffset: -Infinity,
      bottom: -Infinity,
      dimensions: {
        left: -Infinity,
        width: -Infinity,
        top: -Infinity,
        height: -Infinity,
        right: -Infinity,
        targetOffset: -Infinity,
        bottom: -Infinity,
      },
      position: -Infinity,
      targetRect: {
        left: -Infinity,
        width: -Infinity,
        top: -Infinity,
        height: -Infinity,
        right: -Infinity,
        targetOffset: -Infinity,
        bottom: -Infinity,
      },
    })
    expect(result).toMatchSnapshot()
  })
})
