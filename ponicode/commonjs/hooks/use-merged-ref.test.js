const rewire = require('rewire')
const use_merged_ref = rewire('../../../commonjs/hooks/use-merged-ref')
const setRef = use_merged_ref.__get__('setRef')
const useMergedRef = use_merged_ref.__get__('useMergedRef')
// @ponicode
describe('setRef', () => {
  test('0', () => {
    const result = setRef(() => 'Jean-Philippe', 'location')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = setRef(() => 'Michael', 'wasGeneratedBy')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = setRef(() => 'Edmond', 'role')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = setRef(() => 'Michael', 'startup')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = setRef(() => 'Jean-Philippe', 'registry')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = setRef(() => '', '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('useMergedRef', () => {
  test('0', () => {
    const result = useMergedRef('Jean-Philippe', 'Pierre Edouard')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = useMergedRef('Anas', 'George')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = useMergedRef('Michael', 'Anas')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = useMergedRef('George', 'George')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = useMergedRef('Jean-Philippe', 'Edmond')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = useMergedRef('', '')
    expect(result).toMatchSnapshot()
  })
})
