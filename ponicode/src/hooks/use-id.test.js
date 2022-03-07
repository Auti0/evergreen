const use_id = require('../../../src/hooks/use-id')
// @ponicode
describe('use_id.useId', () => {
  test('0', () => {
    const result = use_id.useId('Ms.', 'UNLOCK TABLES;')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = use_id.useId('Dr.', 'DELETE FROM Projects WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = use_id.useId('Miss', 'UPDATE Projects SET pname = %s WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = use_id.useId(
      'Miss',
      "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';"
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = use_id.useId('Ms.', 'UPDATE Projects SET pname = %s WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = use_id.useId('', '')
    expect(result).toMatchSnapshot()
  })
})
