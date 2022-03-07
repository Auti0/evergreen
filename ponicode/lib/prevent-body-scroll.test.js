// @ponicode
describe('prevent_body_scroll.default', () => {
  test('0', () => {
    const result = prevent_body_scroll.default(100)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = prevent_body_scroll.default(1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = prevent_body_scroll.default(0)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = prevent_body_scroll.default(-100)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = prevent_body_scroll.default(-Infinity)
    expect(result).toMatchSnapshot()
  })
})
