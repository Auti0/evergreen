const rewire = require('rewire')
const use_style_config = rewire('../../../src/hooks/use-style-config')
const combineStyles = use_style_config.__get__('combineStyles')
const maybeRun = use_style_config.__get__('maybeRun')
const maybeRunDeep = use_style_config.__get__('maybeRunDeep')
const useMergedStyles = use_style_config.__get__('useMergedStyles')
const useGlamorAndBox = use_style_config.__get__('useGlamorAndBox')
// @ponicode
describe('combineStyles', () => {
  test('0', () => {
    const result = combineStyles(
      'https://croplands.org/app/a/reset?token=',
      12,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      {}
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = combineStyles(
      'http://base.com',
      'bc23a9d531064583ace8f67dad60f6bb',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      {}
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = combineStyles(
      'https://accounts.google.com/o/oauth2/revoke?token=%s',
      'a1969970175',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      {}
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = combineStyles(
      'http://www.example.com/route/123?foo=bar',
      12,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      {}
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = combineStyles(
      'http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg',
      'bc23a9d531064583ace8f67dad60f6bb',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      {}
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = combineStyles('', NaN, '', {})
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('maybeRun', () => {
  test('0', () => {
    const object = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object2 = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const object3 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRun('elio@example.com', param2)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object2 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object3 = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const object4 = [
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRun('Dillenberg', param2)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object2 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object3 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRun('Dillenberg', param2)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object2 = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object3 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object4 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRun('Elio', param2)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object2 = [
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object3 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRun('elio@example.com', param2)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = maybeRun('', [])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('maybeRunDeep', () => {
  test('0', () => {
    const object = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object2 = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object3 = [
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRunDeep([true, false, true, true], param2)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object2 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object3 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRunDeep([true, false, true, false], param2)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const object2 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object3 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object4 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRunDeep([true, false, false, true], param2)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object2 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
    ]
    const object3 = [
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object4 = [
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRunDeep([true, true, true, true], param2)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object2 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '[10, -45.9, 103.5, 0.955674]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[10, -45.9, 103.5, 0.955674]',
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
    ]
    const object3 = [
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '["a", "b", "043", "holasenior"]',
      ],
    ]
    const object4 = [
      [
        '[10, -45.9, 103.5, 0.955674]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[10, -45.9, 103.5, 0.955674]',
      ],
      [
        '[10, -45.9, 103.5, 0.955674]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
      ],
      [
        '["a", "b", "043", "holasenior"]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
      ],
      [
        '["foo bar",  -0.353, "**text**", 4653]',
        '[-1, 0.5, 1, 2, 3, 4, 5]',
        '["a", "b", "043", "holasenior"]',
        '["foo bar",  -0.353, "**text**", 4653]',
      ],
    ]
    const param2 = [object, object2, object3, object4]
    const result = maybeRunDeep([false, true, true, false], param2)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = maybeRunDeep([], [])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('useMergedStyles', () => {
  test('0', () => {
    const object = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object2 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object3 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object4 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useMergedStyles(
      'http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg',
      param2,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      true
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object2 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object3 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object4 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useMergedStyles(
      'https://twitter.com/path?abc',
      param2,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      true
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object2 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object3 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object4 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useMergedStyles(
      'Www.GooGle.com',
      param2,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      false
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object2 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object3 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object4 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useMergedStyles(
      'www.google.com',
      param2,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      true
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object2 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object3 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const object4 = [
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
      ['reply_click()', 'reply_click()', 'reply_click()', 'reply_click()'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useMergedStyles(
      'https://croplands.org/app/a/reset?token=',
      param2,
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      true
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = useMergedStyles('', [], '', true)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('useGlamorAndBox', () => {
  test('0', () => {
    const object = [
      ['user_name', 'user_name', '123', 'user name'],
      ['user-name', 'username', 'user_name', 'user name'],
      ['user123', 'user-name', 'user123', 'username'],
      ['username', 'user-name', 'username', 'user-name'],
    ]
    const object2 = [
      ['user-name', 'user-name', 'user name', '123'],
      ['user123', 'user123', '123', 'username'],
      ['user name', 'user name', 'user123', 'user name'],
      ['user123', 'user_name', 'user123', 'user name'],
    ]
    const object3 = [
      ['username', 'user name', 'user_name', 'user-name'],
      ['user name', 'user123', 'user_name', 'user_name'],
      ['username', '123', 'user123', 'username'],
      ['username', 'user-name', '123', 'user-name'],
    ]
    const object4 = [
      ['user-name', '123', 'user-name', '123'],
      ['user-name', 'user123', 'user-name', 'user123'],
      ['username', 'user-name', 'user name', '123'],
      ['username', 'user name', 'username', 'user123'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useGlamorAndBox('Jean-Philippe', param2)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['123', '123', 'user name', 'user123'],
      ['123', 'user-name', 'user-name', '123'],
      ['123', 'user name', 'user-name', 'user name'],
      ['user_name', 'user name', 'user123', 'user_name'],
    ]
    const object2 = [
      ['user name', 'username', '123', 'user-name'],
      ['username', 'username', 'user name', 'user name'],
      ['user_name', 'user123', 'user name', '123'],
      ['user name', 'user name', '123', '123'],
    ]
    const object3 = [
      ['username', 'user-name', 'user_name', 'user_name'],
      ['user_name', 'user name', 'username', 'user_name'],
      ['username', 'user_name', 'user name', 'user_name'],
      ['123', 'username', 'user-name', 'user-name'],
    ]
    const object4 = [
      ['user name', 'user name', 'username', 'user123'],
      ['user123', 'user name', '123', 'user-name'],
      ['user_name', 'username', 'user_name', '123'],
      ['user123', '123', '123', 'user_name'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useGlamorAndBox('George', param2)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['user123', 'user_name', 'user_name', 'user_name'],
      ['user123', 'user-name', 'user123', '123'],
      ['123', 'username', 'user name', '123'],
      ['user name', 'username', 'user name', 'user123'],
    ]
    const object2 = [
      ['user name', '123', 'user-name', '123'],
      ['username', 'user name', 'user-name', 'user123'],
      ['user123', '123', 'user_name', 'user_name'],
      ['user123', 'username', 'user123', 'user-name'],
    ]
    const object3 = [
      ['user-name', '123', 'user name', '123'],
      ['user name', 'user_name', 'username', 'user-name'],
      ['user123', 'user_name', '123', 'user-name'],
      ['user_name', 'user_name', '123', 'user name'],
    ]
    const object4 = [
      ['username', 'user name', 'user-name', 'user name'],
      ['user-name', 'user-name', 'user-name', '123'],
      ['123', '123', '123', 'user name'],
      ['username', 'username', 'user123', 'username'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useGlamorAndBox('Anas', param2)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['user123', '123', 'user_name', 'user name'],
      ['user123', 'user-name', '123', 'user_name'],
      ['user_name', 'user name', 'user_name', 'user123'],
      ['user-name', 'user_name', 'user name', 'username'],
    ]
    const object2 = [
      ['user123', 'user-name', 'user name', 'user123'],
      ['user-name', 'user_name', 'user-name', 'user-name'],
      ['123', 'username', 'username', 'user-name'],
      ['user123', 'user-name', 'username', '123'],
    ]
    const object3 = [
      ['123', 'user_name', 'user-name', 'user123'],
      ['user123', 'user name', 'username', 'user_name'],
      ['username', 'user123', 'user123', 'user123'],
      ['username', 'user-name', 'user-name', 'user_name'],
    ]
    const object4 = [
      ['user-name', 'user name', 'user name', 'user_name'],
      ['user-name', 'user_name', 'user123', 'username'],
      ['user name', 'username', 'user123', 'user-name'],
      ['username', 'username', '123', 'username'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useGlamorAndBox('Jean-Philippe', param2)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['user_name', 'username', 'user123', 'username'],
      ['user name', 'user123', 'user123', 'user-name'],
      ['user123', 'user123', 'user_name', 'user-name'],
      ['user_name', 'user123', 'user-name', '123'],
    ]
    const object2 = [
      ['user name', 'user_name', 'user-name', '123'],
      ['username', 'user name', 'user-name', '123'],
      ['user name', 'user name', 'user123', 'user_name'],
      ['user123', 'user name', 'user-name', '123'],
    ]
    const object3 = [
      ['123', 'user name', 'user123', 'user_name'],
      ['user name', 'username', 'user123', 'user123'],
      ['user_name', 'username', 'username', 'username'],
      ['user name', 'user123', 'user name', 'user123'],
    ]
    const object4 = [
      ['user name', 'user-name', 'user_name', 'user name'],
      ['user_name', '123', 'user123', 'user-name'],
      ['user-name', '123', 'user_name', 'user123'],
      ['username', 'user name', 'user name', 'user name'],
    ]
    const param2 = [object, object2, object3, object4]
    const result = useGlamorAndBox('Anas', param2)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = useGlamorAndBox('', [])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('use_style_config.useStyleConfig', () => {
  test('0', () => {
    const object = [
      ['Anas', 'Edmond', 'Michael', 'George'],
      ['George', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['Edmond', 'Edmond', 'Anas', 'Jean-Philippe'],
      ['Michael', 'Jean-Philippe', 'George', 'Edmond'],
    ]
    const object2 = [
      ['Edmond', 'George', 'George', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'Pierre Edouard', 'Pierre Edouard'],
      ['Jean-Philippe', 'Edmond', 'Edmond', 'Michael'],
      ['Anas', 'George', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Michael', 'George', 'Pierre Edouard', 'Michael'],
      ['Pierre Edouard', 'Michael', 'Pierre Edouard', 'Pierre Edouard'],
      ['Anas', 'Anas', 'Edmond', 'George'],
      ['Anas', 'George', 'Edmond', 'Edmond'],
    ]
    const object4 = [
      ['Pierre Edouard', 'Anas', 'Michael', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Anas', 'Michael'],
      ['Anas', 'Jean-Philippe', 'Edmond', 'George'],
      ['Anas', 'Anas', 'George', 'Edmond'],
    ]
    const param2 = [object, object2, object3, object4]
    const param3 = [
      ['123', 'username', 'user123', 'user-name'],
      ['123', 'username', 'user name', 'user123'],
      ['user-name', 'user123', 'user_name', 'user_name'],
      ['user name', 'user name', 'user-name', '123'],
    ]
    const result = use_style_config.useStyleConfig('Michael', param2, param3, false)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Anas', 'Edmond', 'Pierre Edouard', 'Anas'],
      ['Anas', 'Michael', 'George', 'Anas'],
      ['George', 'Edmond', 'Jean-Philippe', 'George'],
      ['Jean-Philippe', 'Anas', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Anas', 'Pierre Edouard', 'Edmond', 'Anas'],
      ['Edmond', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Michael', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
    ]
    const object3 = [
      ['Jean-Philippe', 'George', 'George', 'Jean-Philippe'],
      ['Michael', 'George', 'George', 'Edmond'],
      ['George', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'George'],
    ]
    const object4 = [
      ['Pierre Edouard', 'George', 'George', 'Jean-Philippe'],
      ['Pierre Edouard', 'George', 'George', 'Edmond'],
      ['Michael', 'Anas', 'Edmond', 'Pierre Edouard'],
      ['Edmond', 'Anas', 'George', 'Michael'],
    ]
    const param2 = [object, object2, object3, object4]
    const param3 = [
      ['user_name', 'user123', 'user_name', 'user_name'],
      ['user-name', '123', 'user_name', 'user_name'],
      ['user-name', 'username', 'user name', '123'],
      ['user-name', 'username', '123', 'user name'],
    ]
    const result = use_style_config.useStyleConfig('Anas', param2, param3, false)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Jean-Philippe', 'Edmond', 'Michael', 'Anas'],
      ['Anas', 'Anas', 'George', 'Edmond'],
      ['Anas', 'George', 'Anas', 'Pierre Edouard'],
      ['Edmond', 'Michael', 'Anas', 'George'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Edmond', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'George', 'Michael', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Edmond'],
      ['Pierre Edouard', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
    ]
    const object3 = [
      ['George', 'Michael', 'George', 'George'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'Anas'],
      ['George', 'Anas', 'Anas', 'George'],
      ['Michael', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object4 = [
      ['Jean-Philippe', 'George', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Edmond', 'Michael'],
      ['George', 'Edmond', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'Edmond'],
    ]
    const param2 = [object, object2, object3, object4]
    const param3 = [
      ['user_name', 'username', 'user_name', 'user name'],
      ['123', 'user-name', 'user name', 'user_name'],
      ['user-name', 'user123', 'username', 'username'],
      ['user_name', 'user name', 'username', '123'],
    ]
    const result = use_style_config.useStyleConfig('George', param2, param3, true)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Michael', 'Pierre Edouard', 'Anas', 'Michael'],
      ['George', 'George', 'Jean-Philippe', 'Jean-Philippe'],
      ['Edmond', 'Edmond', 'Edmond', 'Edmond'],
      ['Anas', 'George', 'Michael', 'George'],
    ]
    const object2 = [
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Anas'],
      ['Anas', 'Michael', 'George', 'Pierre Edouard'],
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Anas', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Anas', 'Jean-Philippe', 'Michael', 'Jean-Philippe'],
      ['George', 'George', 'Edmond', 'Pierre Edouard'],
      ['George', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['Michael', 'Anas', 'George', 'Edmond'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Michael', 'George', 'Anas'],
      ['Anas', 'Jean-Philippe', 'Edmond', 'Anas'],
      ['Michael', 'Edmond', 'Anas', 'Michael'],
      ['Edmond', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const param2 = [object, object2, object3, object4]
    const param3 = [
      ['user name', 'user123', 'user123', 'username'],
      ['user_name', '123', 'username', 'username'],
      ['user name', 'username', 'user name', 'user-name'],
      ['user123', 'username', '123', 'username'],
    ]
    const result = use_style_config.useStyleConfig('Anas', param2, param3, true)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard', 'George'],
      ['Jean-Philippe', 'Edmond', 'Michael', 'Jean-Philippe'],
      ['George', 'Jean-Philippe', 'Michael', 'Edmond'],
      ['Edmond', 'George', 'Jean-Philippe', 'Michael'],
    ]
    const object2 = [
      ['Edmond', 'Anas', 'Anas', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Edmond', 'Michael'],
      ['George', 'George', 'Edmond', 'George'],
      ['Pierre Edouard', 'Edmond', 'Edmond', 'Edmond'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Pierre Edouard', 'George', 'George'],
      ['Michael', 'Michael', 'Jean-Philippe', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'Jean-Philippe', 'Jean-Philippe'],
      ['George', 'Jean-Philippe', 'George', 'Pierre Edouard'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Michael', 'Edmond', 'Jean-Philippe'],
      ['George', 'Edmond', 'Pierre Edouard', 'Anas'],
      ['Edmond', 'George', 'George', 'Edmond'],
      ['Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe', 'George'],
    ]
    const param2 = [object, object2, object3, object4]
    const param3 = [
      ['user name', 'user_name', 'user name', 'user name'],
      ['user_name', 'user_name', 'user_name', 'user name'],
      ['123', '123', 'username', 'user_name'],
      ['user_name', 'user123', 'user name', 'user123'],
    ]
    const result = use_style_config.useStyleConfig('George', param2, param3, false)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = use_style_config.useStyleConfig('', [], [], true)
    expect(result).toMatchSnapshot()
  })
})
