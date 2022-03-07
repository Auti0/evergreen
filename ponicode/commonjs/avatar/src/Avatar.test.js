const rewire = require('rewire')
const Avatar = rewire('../../../../commonjs/avatar/src/Avatar')
const getAvatarInitialsFontSize = Avatar.__get__('getAvatarInitialsFontSize')
const _getRequireWildcardCache = Avatar.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = Avatar.__get__('_interopRequireWildcard')
// @ponicode
describe('getAvatarInitialsFontSize', () => {
  test('0', () => {
    const result = getAvatarInitialsFontSize(2.2, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getAvatarInitialsFontSize(2.4000000000000004, -29.45)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getAvatarInitialsFontSize(3.6, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getAvatarInitialsFontSize(1.2000000000000002, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getAvatarInitialsFontSize(2.4000000000000004, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getAvatarInitialsFontSize(-Infinity, -Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('tag')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('action')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"'],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"'],
      'wasGeneratedBy'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"[3,"false",false]"'],
      'account'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'parameter'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})
