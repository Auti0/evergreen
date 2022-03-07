const theme_tools = require('../../../../src/theme/src/theme-tools')
// @ponicode
describe('theme_tools.mergeTheme', () => {
  test('0', () => {
    const result = theme_tools.mergeTheme(
      'https://twitter.com/path?abc',
      'https://accounts.google.com/o/oauth2/revoke?token=%s'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = theme_tools.mergeTheme('https://api.telegram.org/bot', 'http://www.croplands.org/account/confirm?t=')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = theme_tools.mergeTheme('Www.GooGle.com', 'https://twitter.com/path?abc')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = theme_tools.mergeTheme(
      'https://croplands.org/app/a/reset?token=',
      'https://accounts.google.com/o/oauth2/revoke?token=%s'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = theme_tools.mergeTheme(
      'http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg',
      'http://www.example.com/route/123?foo=bar'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = theme_tools.mergeTheme('', '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('theme_tools.getValue', () => {
  test('0', () => {
    const result = theme_tools.getValue('http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg', 'Anas')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = theme_tools.getValue('ponicode.com', 'Pierre Edouard')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = theme_tools.getValue('ponicode.com', 'Michael')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = theme_tools.getValue('www.google.com', 'Pierre Edouard')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = theme_tools.getValue('https://twitter.com/path?abc', 'Edmond')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = theme_tools.getValue('', '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('theme_tools.get', () => {
  test('0', () => {
    const result = theme_tools.get(
      ['"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"'],
      '..',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = theme_tools.get(
      [
        '"{"x":[10,null,null,null]}"',
        '"{"x":[10,null,null,null]}"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      '..',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = theme_tools.get(
      ['"{"x":5,"y":6}"', '"[3,"false",false]"', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""'],
      'path/to/file.ext..C:\\\\path\\to\\file.ext',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = theme_tools.get(
      [
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":5,"y":6}"',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'C:\\\\path\\to\\file.ext.',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = theme_tools.get(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"'],
      'path/to/file.ext..C:\\\\path\\to\\file.ext',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = theme_tools.get([], '', '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('theme_tools.resolveThemeTokens', () => {
  test('0', () => {
    const result = theme_tools.resolveThemeTokens('https://accounts.google.com/o/oauth2/revoke?token=%s', [
      '""2006-01-02T14:04:05.000Z""',
      '"{"x":5,"y":6}"',
      '""2006-01-02T14:04:05.000Z""',
      '""2006-01-02T14:04:05.000Z""',
    ])
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = theme_tools.resolveThemeTokens('www.google.com', [
      '"[3,"false",false]"',
      '"{"x":[10,null,null,null]}"',
      '""2006-01-02T14:04:05.000Z""',
      '"{"x":[10,null,null,null]}"',
    ])
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = theme_tools.resolveThemeTokens('http://www.croplands.org/account/confirm?t=', [
      '""2006-01-02T14:04:05.000Z""',
      '"{"x":[10,null,null,null]}"',
      '""2006-01-02T14:04:05.000Z""',
      '"{"x":5,"y":6}"',
    ])
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = theme_tools.resolveThemeTokens('ponicode.com', [
      '"{"x":5,"y":6}"',
      '"{"x":5,"y":6}"',
      '"{"x":5,"y":6}"',
      '"{"x":5,"y":6}"',
    ])
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = theme_tools.resolveThemeTokens('https://api.telegram.org/', [
      '"[3,"false",false]"',
      '"{"x":[10,null,null,null]}"',
      '""2006-01-02T14:04:05.000Z""',
      '"{"x":[10,null,null,null]}"',
    ])
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = theme_tools.resolveThemeTokens('', [])
    expect(result).toMatchSnapshot()
  })
})
