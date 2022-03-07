const rewire = require('rewire')
const use_clickable = rewire('../../../commonjs/hooks/use-clickable')
const useClickable = use_clickable.__get__('useClickable')
// @ponicode
describe('useClickable', () => {
  test('0', () => {
    const result = useClickable()
    expect(result).toMatchSnapshot()
  })
})
