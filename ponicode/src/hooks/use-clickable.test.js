const use_clickable = require('../../../src/hooks/use-clickable')
// @ponicode
describe('use_clickable.useClickable', () => {
  test('0', () => {
    const result = use_clickable.useClickable({ onKeyDown: '2021-07-29T15:31:46.922Z' })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = use_clickable.useClickable({ onKeyDown: '2021-07-30T00:05:36.818Z' })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = use_clickable.useClickable({ onKeyDown: '2021-07-29T20:12:53.196Z' })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = use_clickable.useClickable({ onKeyDown: '2021-07-29T23:03:48.812Z' })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = use_clickable.useClickable({ onKeyDown: '' })
    expect(result).toMatchSnapshot()
  })
})
