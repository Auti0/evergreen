const rewire = require('rewire')
const index_stories = rewire('../../../../src/overlay/stories/index.stories')
const OverlayManager = index_stories.__get__('OverlayManager')
// @ponicode
describe('OverlayManager.render', () => {
  let inst

  beforeEach(() => {
    inst = new OverlayManager()
  })

  test('0', () => {
    const result = inst.render()
    expect(result).toMatchSnapshot()
  })
})
