const rewire = require('rewire')
const index_stories = rewire('../../../../src/combobox/stories/index.stories')
const handleChange = index_stories.__get__('handleChange')
// @ponicode
describe('handleChange', () => {
  test('0', () => {
    const result = handleChange(
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = handleChange('')
    expect(result).toMatchSnapshot()
  })
})
