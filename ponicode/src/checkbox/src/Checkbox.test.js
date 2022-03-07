const rewire = require('rewire')
const Checkbox = rewire('../../../../src/checkbox/src/Checkbox')
const noop = Checkbox.__get__('noop')
// @ponicode
describe('noop', () => {
  test('0', () => {
    const result = noop()
    expect(result).toMatchSnapshot()
  })
})
