const rewire = require('rewire')
const Overlay = rewire('../../../../commonjs/overlay/src/Overlay')
const _getRequireWildcardCache = Overlay.__get__('_getRequireWildcardCache')
const noop = Overlay.__get__('noop')
const _interopRequireWildcard = Overlay.__get__('_interopRequireWildcard')
const animationStyles = Overlay.__get__('animationStyles')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('group')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('used')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('noop', () => {
  test('0', () => {
    const result = noop()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"'],
      'startup'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"'],
      'startup'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"[3,"false",false]"'],
      'used'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"'],
      'tag'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('animationStyles', () => {
  test('0', () => {
    const result = animationStyles('red')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = animationStyles('hsl(10%,20%,40%)')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = animationStyles('green')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = animationStyles('#F00')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = animationStyles('rgb(0.1,0.2,0.3)')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = animationStyles('')
    expect(result).toMatchSnapshot()
  })
})
