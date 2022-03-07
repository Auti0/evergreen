const rewire = require('rewire')
const replace_icon_imports = rewire('../../../codemods/4.28.1-4.29.0/replace-icon-imports')
const matchStringLiteralIconProps = replace_icon_imports.__get__('matchStringLiteralIconProps')
// @ponicode
describe('matchStringLiteralIconProps', () => {
  test('0', () => {
    const result = matchStringLiteralIconProps(
      {
        type: 'JSXAttribute',
        name: { type: 'number', name: 'Edmond' },
        value: { type: 'StringLiteral', name: 'Edmond' },
      },
      'Jean-Philippe'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = matchStringLiteralIconProps(
      {
        type: 'JSXAttribute',
        name: { type: 'array', name: 'Michael' },
        value: { type: 'StringLiteral', name: 'Pierre Edouard' },
      },
      'Edmond'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = matchStringLiteralIconProps(
      {
        type: 'JSXAttribute',
        name: { type: 'object', name: 'Anas' },
        value: { type: 'StringLiteral', name: 'Jean-Philippe' },
      },
      'George'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = matchStringLiteralIconProps(
      {
        type: 'JSXAttribute',
        name: { type: 'array', name: 'Pierre Edouard' },
        value: { type: 'StringLiteral', name: 'George' },
      },
      'Anas'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = matchStringLiteralIconProps(
      {
        type: 'JSXAttribute',
        name: { type: 'array', name: 'Jean-Philippe' },
        value: { type: 'StringLiteral', name: 'Jean-Philippe' },
      },
      'Jean-Philippe'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = matchStringLiteralIconProps(
      { type: '', name: { type: '', name: '' }, value: { type: '', name: '' } },
      ''
    )
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('replace_icon_imports.default', () => {
  test('0', () => {
    const result = replace_icon_imports.default(
      { source: 'https://api.telegram.org/bot' },
      'https://accounts.google.com/o/oauth2/revoke?token=%s'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = replace_icon_imports.default({ source: 'https://twitter.com/path?abc' }, 'http://base.com')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = replace_icon_imports.default({ source: 'https://api.telegram.org/bot' }, 'https://api.telegram.org/')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = replace_icon_imports.default(
      { source: 'https://croplands.org/app/a/reset?token=' },
      'https://api.telegram.org/bot'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = replace_icon_imports.default(
      { source: 'ponicode.com' },
      'http://www.croplands.org/account/confirm?t='
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = replace_icon_imports.default({ source: '' }, '')
    expect(result).toMatchSnapshot()
  })
})
