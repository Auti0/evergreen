const deprecated = require('../../../commonjs/lib/deprecated')
// @ponicode
describe('deprecated.default', () => {
  test('0', () => {
    const param2 = [
      ['9876', '12345', 'bc23a9d531064583ace8f67dad60f6bb', '9876'],
      ['9876', 'bc23a9d531064583ace8f67dad60f6bb', '12345', 'c466a48309794261b64a4f02cfcc3d64'],
      ['9876', 'da7588892', 'da7588892', '12345'],
      ['9876', '9876', '12345', '12345'],
    ]
    const result = deprecated.default({ apply: () => 'Anas' }, param2)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const param2 = [
      ['12345', '12345', '12345', '9876'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'da7588892', 'bc23a9d531064583ace8f67dad60f6bb', '12345'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 'da7588892', '12345'],
      ['12345', 'c466a48309794261b64a4f02cfcc3d64', '9876', 'c466a48309794261b64a4f02cfcc3d64'],
    ]
    const result = deprecated.default({ apply: () => 'Jean-Philippe' }, param2)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const param2 = [
      ['bc23a9d531064583ace8f67dad60f6bb', '9876', '12345', '12345'],
      ['12345', 'c466a48309794261b64a4f02cfcc3d64', '9876', 'da7588892'],
      ['bc23a9d531064583ace8f67dad60f6bb', '9876', '12345', 'da7588892'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'c466a48309794261b64a4f02cfcc3d64', 'da7588892', '12345'],
    ]
    const result = deprecated.default({ apply: () => 'Edmond' }, param2)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const param2 = [
      ['12345', 'c466a48309794261b64a4f02cfcc3d64', 'bc23a9d531064583ace8f67dad60f6bb', 'da7588892'],
      [
        'c466a48309794261b64a4f02cfcc3d64',
        'c466a48309794261b64a4f02cfcc3d64',
        'bc23a9d531064583ace8f67dad60f6bb',
        '9876',
      ],
      ['c466a48309794261b64a4f02cfcc3d64', 'da7588892', '12345', 'bc23a9d531064583ace8f67dad60f6bb'],
      ['bc23a9d531064583ace8f67dad60f6bb', '9876', '9876', '12345'],
    ]
    const result = deprecated.default({ apply: () => 'George' }, param2)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const param2 = [
      ['bc23a9d531064583ace8f67dad60f6bb', '9876', '9876', 'da7588892'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', '9876', '9876'],
      ['da7588892', 'c466a48309794261b64a4f02cfcc3d64', 'bc23a9d531064583ace8f67dad60f6bb', '12345'],
      ['da7588892', '9876', 'da7588892', '9876'],
    ]
    const result = deprecated.default({ apply: () => 'Jean-Philippe' }, param2)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = deprecated.default({ apply: () => '' }, [])
    expect(result).toMatchSnapshot()
  })
})
