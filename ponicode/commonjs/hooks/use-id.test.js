const rewire = require('rewire')
const use_id = rewire('../../../commonjs/hooks/use-id')
const useId = use_id.__get__('useId')
// @ponicode
describe('useId', () => {
  test('0', () => {
    const result = useId('Ms.', 'UPDATE Projects SET pname = %s WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = useId('Ms.', "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = useId('Ms.', 'UNLOCK TABLES;')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = useId('Ms.', 'DELETE FROM Projects WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = useId('Dr.', 'DELETE FROM Projects WHERE pid = %s')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = useId('', '')
    expect(result).toMatchSnapshot()
  })
})
