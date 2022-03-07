const use_force_update = require('../../../src/hooks/use-force-update')
// @ponicode
describe('use_force_update.useForceUpdate', () => {
  test('0', () => {
    const result = use_force_update.useForceUpdate()
    expect(result).toMatchSnapshot()
  })
})
