const rewire = require('rewire')
const Pagination = rewire('../../../../commonjs/pagination/src/Pagination')
const _getRequireWildcardCache = Pagination.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = Pagination.__get__('_interopRequireWildcard')
const range = Pagination.__get__('range')
const getPaginationButtonContent = Pagination.__get__('getPaginationButtonContent')
const PaginationButton = Pagination.__get__('PaginationButton')
const noop = Pagination.__get__('noop')
// @ponicode
describe('Pagination.usePaginationBehavior', () => {
  test('0', () => {
    const result = Pagination.usePaginationBehavior()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('registry')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('effect')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('alias')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('parameter')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('action')
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
      'add'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      [
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'key'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"'],
      'location'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'effect'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('range', () => {
  test('0', () => {
    const result = range(0, 1.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = range(1, 0.0)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = range(100, 0.5)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = range(0, -29.45)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = range(0, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = range(-Infinity, -Infinity)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('getPaginationButtonContent', () => {
  test('0', () => {
    const result = getPaginationButtonContent({ page: 1, totalPages: 3.0 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getPaginationButtonContent({ page: 4, totalPages: 4 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getPaginationButtonContent({ page: 0.0, totalPages: 3.0 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getPaginationButtonContent({ page: 2.5, totalPages: 4 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getPaginationButtonContent({ page: 1.0, totalPages: 4 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getPaginationButtonContent({ page: Infinity, totalPages: Infinity })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('PaginationButton', () => {
  test('0', () => {
    const result = PaginationButton({ page: '...', isSelected: true })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = PaginationButton({ page: '...', isSelected: false })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = PaginationButton({ page: 'https://twitter.com/path?abc', isSelected: true })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = PaginationButton({ page: 'http://www.croplands.org/account/confirm?t=', isSelected: true })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = PaginationButton({ page: 'http://www.example.com/route/123?foo=bar', isSelected: false })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = PaginationButton({ page: '', isSelected: false })
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
