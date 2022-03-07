const rewire = require('rewire')
const EmptyState = rewire('../../../../commonjs/empty-states/src/EmptyState')
const _getRequireWildcardCache = EmptyState.__get__('_getRequireWildcardCache')
const _interopRequireWildcard = EmptyState.__get__('_interopRequireWildcard')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('alias')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('port')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('package')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('location')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _getRequireWildcardCache('function')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _getRequireWildcardCache('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"'],
      'action'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""', '"[3,"false",false]"'],
      'account'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      [
        '"[3,"false",false]"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
      ],
      'registry'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '"{"x":5,"y":6}"'],
      'alias'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      ['"[3,"false",false]"', '"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'function'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('EmptyState.default.PrimaryButton', () => {
  test('0', () => {
    const object = [
      ['George', 'Jean-Philippe', 'Anas', 'Anas'],
      ['Edmond', 'Anas', 'Edmond', 'Anas'],
      ['Edmond', 'Pierre Edouard', 'Anas', 'Jean-Philippe'],
      ['Anas', 'Anas', 'Michael', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Michael', 'Michael'],
      ['Jean-Philippe', 'George', 'Michael', 'Anas'],
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Edmond'],
      ['George', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Michael', 'Michael', 'Michael'],
      ['Michael', 'Jean-Philippe', 'Anas', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Anas', 'Anas'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'George'],
    ]
    const object4 = [
      ['Michael', 'George', 'Pierre Edouard', 'Michael'],
      ['Anas', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Pierre Edouard', 'George', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'George', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['George', 'Edmond', 'George', 'George'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'Michael', 'Edmond', 'George'],
      ['Anas', 'George', 'Edmond', 'Michael'],
    ]
    const object2 = [
      ['Edmond', 'Michael', 'Edmond', 'Jean-Philippe'],
      ['Anas', 'George', 'Edmond', 'Anas'],
      ['Jean-Philippe', 'Edmond', 'Anas', 'George'],
      ['George', 'Michael', 'Edmond', 'Anas'],
    ]
    const object3 = [
      ['Edmond', 'Anas', 'Jean-Philippe', 'George'],
      ['Michael', 'George', 'Pierre Edouard', 'George'],
      ['Michael', 'Michael', 'Edmond', 'George'],
      ['Pierre Edouard', 'Jean-Philippe', 'Michael', 'Edmond'],
    ]
    const object4 = [
      ['Jean-Philippe', 'George', 'Michael', 'Pierre Edouard'],
      ['George', 'Jean-Philippe', 'George', 'Jean-Philippe'],
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'Michael'],
      ['Michael', 'Edmond', 'Anas', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Pierre Edouard', 'Anas', 'Michael', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Michael', 'George', 'Michael'],
      ['Jean-Philippe', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Edmond', 'Pierre Edouard', 'Pierre Edouard', 'George'],
      ['Edmond', 'Pierre Edouard', 'Jean-Philippe', 'Edmond'],
      ['Jean-Philippe', 'George', 'George', 'Edmond'],
      ['George', 'George', 'Anas', 'Jean-Philippe'],
    ]
    const object3 = [
      ['George', 'Michael', 'Pierre Edouard', 'Anas'],
      ['Edmond', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Pierre Edouard', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Pierre Edouard', 'George', 'Pierre Edouard', 'George'],
    ]
    const object4 = [
      ['Anas', 'Michael', 'Jean-Philippe', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Anas', 'Michael'],
      ['Edmond', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
      ['Michael', 'Michael', 'Pierre Edouard', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Pierre Edouard', 'George', 'Michael', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'George', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'George'],
      ['Michael', 'George', 'Pierre Edouard', 'Edmond'],
    ]
    const object2 = [
      ['George', 'Edmond', 'Edmond', 'Edmond'],
      ['George', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Anas', 'George', 'Edmond', 'Anas'],
      ['George', 'George', 'George', 'Edmond'],
    ]
    const object3 = [
      ['Edmond', 'Michael', 'George', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Edmond', 'Michael'],
      ['Edmond', 'George', 'Pierre Edouard', 'Pierre Edouard'],
      ['Anas', 'George', 'Anas', 'Edmond'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Michael', 'George', 'George'],
      ['Michael', 'Jean-Philippe', 'Michael', 'George'],
      ['Anas', 'Pierre Edouard', 'Michael', 'Anas'],
      ['George', 'Jean-Philippe', 'Anas', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Jean-Philippe', 'George', 'Pierre Edouard', 'Jean-Philippe'],
      ['Pierre Edouard', 'Jean-Philippe', 'George', 'George'],
      ['Michael', 'Anas', 'Anas', 'Michael'],
      ['Anas', 'George', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const object2 = [
      ['George', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['Jean-Philippe', 'Edmond', 'Edmond', 'George'],
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'Anas'],
      ['Michael', 'Michael', 'Michael', 'Anas'],
    ]
    const object3 = [
      ['George', 'Michael', 'Edmond', 'Edmond'],
      ['Jean-Philippe', 'Michael', 'Edmond', 'George'],
      ['Anas', 'George', 'Jean-Philippe', 'Jean-Philippe'],
      ['Pierre Edouard', 'George', 'Anas', 'Michael'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'Michael'],
      ['Edmond', 'Michael', 'Pierre Edouard', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'George', 'Anas', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.PrimaryButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = EmptyState.default.PrimaryButton([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('EmptyState.default.LinkButton', () => {
  test('0', () => {
    const object = [
      ['Edmond', 'Michael', 'Jean-Philippe', 'Pierre Edouard'],
      ['Anas', 'George', 'Anas', 'Anas'],
      ['Anas', 'Michael', 'Anas', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Michael', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Edmond', 'George', 'Pierre Edouard', 'Pierre Edouard'],
      ['Anas', 'Edmond', 'George', 'George'],
      ['George', 'Jean-Philippe', 'Edmond', 'Edmond'],
      ['Pierre Edouard', 'Anas', 'Pierre Edouard', 'George'],
    ]
    const object3 = [
      ['Anas', 'Michael', 'Anas', 'Jean-Philippe'],
      ['Pierre Edouard', 'Edmond', 'George', 'George'],
      ['Jean-Philippe', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['George', 'Pierre Edouard', 'Edmond', 'George'],
    ]
    const object4 = [
      ['George', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
      ['George', 'Anas', 'Anas', 'Edmond'],
      ['Anas', 'Michael', 'Anas', 'Pierre Edouard'],
      ['George', 'Jean-Philippe', 'Michael', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Jean-Philippe', 'Michael', 'Anas', 'Michael'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'George'],
      ['Anas', 'Edmond', 'Anas', 'Pierre Edouard'],
      ['Anas', 'Anas', 'Anas', 'Michael'],
    ]
    const object2 = [
      ['Anas', 'Anas', 'Pierre Edouard', 'Edmond'],
      ['Edmond', 'Pierre Edouard', 'George', 'Edmond'],
      ['Michael', 'Michael', 'Michael', 'George'],
      ['Michael', 'George', 'Jean-Philippe', 'Edmond'],
    ]
    const object3 = [
      ['George', 'Edmond', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'Edmond', 'George', 'Edmond'],
      ['Michael', 'George', 'Anas', 'Anas'],
      ['Michael', 'George', 'Edmond', 'Pierre Edouard'],
    ]
    const object4 = [
      ['Edmond', 'Pierre Edouard', 'George', 'Edmond'],
      ['Michael', 'George', 'Pierre Edouard', 'George'],
      ['Jean-Philippe', 'Michael', 'Michael', 'Anas'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Edmond', 'Anas', 'Anas', 'Edmond'],
      ['Edmond', 'Michael', 'Michael', 'Jean-Philippe'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
      ['Edmond', 'Edmond', 'Anas', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Michael', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Michael', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
      ['Michael', 'George', 'Edmond', 'Anas'],
      ['Anas', 'Pierre Edouard', 'Anas', 'Edmond'],
    ]
    const object3 = [
      ['George', 'Anas', 'Anas', 'Anas'],
      ['Pierre Edouard', 'George', 'Edmond', 'Jean-Philippe'],
      ['Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe', 'George'],
      ['Jean-Philippe', 'Edmond', 'Jean-Philippe', 'Michael'],
    ]
    const object4 = [
      ['Edmond', 'Michael', 'Jean-Philippe', 'Anas'],
      ['George', 'Michael', 'George', 'Edmond'],
      ['George', 'Michael', 'George', 'Edmond'],
      ['Anas', 'George', 'Michael', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Anas', 'George', 'Anas', 'Michael'],
      ['Anas', 'Pierre Edouard', 'Anas', 'Pierre Edouard'],
      ['Anas', 'George', 'Edmond', 'Edmond'],
      ['Michael', 'George', 'Edmond', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Jean-Philippe', 'Anas', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Michael', 'George'],
      ['Anas', 'George', 'Anas', 'Anas'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Pierre Edouard', 'George', 'Michael'],
      ['Jean-Philippe', 'Edmond', 'Anas', 'Edmond'],
      ['Pierre Edouard', 'Pierre Edouard', 'George', 'Anas'],
      ['George', 'Edmond', 'Edmond', 'Michael'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'Michael'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Edmond'],
      ['Pierre Edouard', 'Edmond', 'Michael', 'Jean-Philippe'],
      ['George', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Jean-Philippe', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'Edmond'],
      ['Pierre Edouard', 'Pierre Edouard', 'Edmond', 'George'],
      ['Jean-Philippe', 'George', 'George', 'Michael'],
    ]
    const object2 = [
      ['Michael', 'Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard'],
      ['Michael', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Michael', 'George'],
      ['Edmond', 'Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Jean-Philippe', 'Pierre Edouard', 'Michael', 'George'],
      ['George', 'Pierre Edouard', 'Edmond', 'Pierre Edouard'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'George', 'Michael', 'Michael'],
    ]
    const object4 = [
      ['Edmond', 'Pierre Edouard', 'George', 'Michael'],
      ['Jean-Philippe', 'Anas', 'Michael', 'Edmond'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'Anas', 'George', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = EmptyState.default.LinkButton(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = EmptyState.default.LinkButton([])
    expect(result).toMatchSnapshot()
  })
})
