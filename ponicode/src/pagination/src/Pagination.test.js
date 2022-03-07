const rewire = require('rewire')
const Pagination = rewire('../../../../src/pagination/src/Pagination')
const getPaginationButtonContent = Pagination.__get__('getPaginationButtonContent')
const range = Pagination.__get__('range')
const noop = Pagination.__get__('noop')
// @ponicode
describe('getPaginationButtonContent', () => {
  test('0', () => {
    const result = getPaginationButtonContent({ page: 1, totalPages: 5 })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = getPaginationButtonContent({ page: 2, totalPages: 4.0 })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = getPaginationButtonContent({ page: 1, totalPages: 4 })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = getPaginationButtonContent({ page: 2.5, totalPages: 5 })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = getPaginationButtonContent({ page: 4.0, totalPages: 4 })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = getPaginationButtonContent({ page: -Infinity, totalPages: -Infinity })
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('range', () => {
  test('0', () => {
    const result = range(-100, 10.0)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = range(0, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = range(0, 10.23)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = range(-5.48, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = range(-100, -0.5)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = range(NaN, NaN)
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
