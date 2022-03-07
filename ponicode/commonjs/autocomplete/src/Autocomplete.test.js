const rewire = require('rewire')
const Autocomplete = rewire('../../../../commonjs/autocomplete/src/Autocomplete')
const _getRequireWildcardCache = Autocomplete.__get__('_getRequireWildcardCache')
const ownKeys = Autocomplete.__get__('ownKeys')
const _interopRequireWildcard = Autocomplete.__get__('_interopRequireWildcard')
const _objectSpread = Autocomplete.__get__('_objectSpread')
const noop = Autocomplete.__get__('noop')
const fuzzyFilter = Autocomplete.__get__('fuzzyFilter')
const autocompleteItemRenderer = Autocomplete.__get__('autocompleteItemRenderer')
const AutocompleteItems = Autocomplete.__get__('AutocompleteItems')
// @ponicode
describe('_getRequireWildcardCache', () => {
  test('0', () => {
    const result = _getRequireWildcardCache('account')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _getRequireWildcardCache('action')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _getRequireWildcardCache('startup')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _getRequireWildcardCache('wasGeneratedBy')
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
describe('ownKeys', () => {
  test('0', () => {
    const result = ownKeys({}, false)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = ownKeys({}, true)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = ownKeys(undefined, undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_interopRequireWildcard', () => {
  test('0', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"[3,"false",false]"', '""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"'],
      'value'
    )
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"', '""2006-01-02T14:04:05.000Z""'],
      'action'
    )
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = _interopRequireWildcard(
      ['"{"x":[10,null,null,null]}"', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '""2006-01-02T14:04:05.000Z""'],
      'tag'
    )
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = _interopRequireWildcard(
      ['""2006-01-02T14:04:05.000Z""', '"{"x":5,"y":6}"', '"{"x":5,"y":6}"', '"{"x":[10,null,null,null]}"'],
      'add'
    )
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = _interopRequireWildcard(
      [
        '"{"x":5,"y":6}"',
        '""2006-01-02T14:04:05.000Z""',
        '""2006-01-02T14:04:05.000Z""',
        '"{"x":[10,null,null,null]}"',
      ],
      'value'
    )
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = _interopRequireWildcard([], '')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('_objectSpread', () => {
  test('0', () => {
    const result = _objectSpread({})
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = _objectSpread(undefined)
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('noop', () => {
  test('0', () => {
    const result = noop()
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('fuzzyFilter', () => {
  test('0', () => {
    const result = fuzzyFilter('1.0.0')
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const result = fuzzyFilter('v4.0.0-rc.4')
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const result = fuzzyFilter('^5.0.0')
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const result = fuzzyFilter('v1.2.4')
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const result = fuzzyFilter('4.0.0-beta1\t')
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = fuzzyFilter('')
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('autocompleteItemRenderer', () => {
  test('0', () => {
    const object = [
      ['Michael', 'George', 'Michael', 'Edmond'],
      ['Michael', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['George', 'Anas', 'Jean-Philippe', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Jean-Philippe', 'Anas'],
    ]
    const object2 = [
      ['Pierre Edouard', 'George', 'George', 'Michael'],
      ['Michael', 'Jean-Philippe', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'George', 'Jean-Philippe', 'Michael'],
      ['Michael', 'Edmond', 'Edmond', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Anas', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'Jean-Philippe', 'Anas', 'Anas'],
      ['Edmond', 'Edmond', 'George', 'Edmond'],
      ['Michael', 'George', 'Pierre Edouard', 'Anas'],
    ]
    const object4 = [
      ['Michael', 'George', 'Edmond', 'Michael'],
      ['George', 'Pierre Edouard', 'Edmond', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Jean-Philippe', 'Anas', 'Edmond', 'George'],
      ['Jean-Philippe', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['Anas', 'Edmond', 'Anas', 'Edmond'],
      ['Michael', 'Michael', 'Jean-Philippe', 'George'],
    ]
    const object2 = [
      ['Jean-Philippe', 'George', 'Edmond', 'Anas'],
      ['Anas', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'George', 'Edmond', 'Edmond'],
    ]
    const object3 = [
      ['George', 'Jean-Philippe', 'Michael', 'George'],
      ['Michael', 'Michael', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'Michael', 'George', 'Pierre Edouard'],
      ['Anas', 'Pierre Edouard', 'George', 'Michael'],
    ]
    const object4 = [
      ['Pierre Edouard', 'George', 'Michael', 'George'],
      ['Anas', 'Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'Michael', 'Anas', 'Edmond'],
      ['Edmond', 'Michael', 'Anas', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Anas', 'Michael', 'Jean-Philippe', 'Anas'],
      ['George', 'Jean-Philippe', 'Anas', 'Michael'],
      ['Michael', 'George', 'Michael', 'Pierre Edouard'],
      ['Jean-Philippe', 'Anas', 'Anas', 'Michael'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['George', 'Edmond', 'Edmond', 'Michael'],
      ['Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
      ['Anas', 'Anas', 'Pierre Edouard', 'Edmond'],
    ]
    const object3 = [
      ['Anas', 'Anas', 'Pierre Edouard', 'Michael'],
      ['Pierre Edouard', 'Pierre Edouard', 'Anas', 'George'],
      ['Pierre Edouard', 'Michael', 'George', 'Jean-Philippe'],
      ['Anas', 'Michael', 'George', 'Anas'],
    ]
    const object4 = [
      ['Michael', 'Anas', 'Edmond', 'Michael'],
      ['Edmond', 'Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe'],
      ['Pierre Edouard', 'Anas', 'Edmond', 'Michael'],
      ['Pierre Edouard', 'Edmond', 'Edmond', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Michael', 'Michael', 'Anas', 'George'],
      ['Michael', 'Jean-Philippe', 'Michael', 'George'],
      ['Anas', 'George', 'Pierre Edouard', 'Pierre Edouard'],
      ['Anas', 'Anas', 'Anas', 'Edmond'],
    ]
    const object2 = [
      ['Michael', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Edmond', 'Pierre Edouard'],
      ['George', 'Jean-Philippe', 'Edmond', 'Edmond'],
      ['George', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
    ]
    const object3 = [
      ['Michael', 'Anas', 'George', 'Jean-Philippe'],
      ['Anas', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'Anas', 'Edmond', 'George'],
    ]
    const object4 = [
      ['Anas', 'Edmond', 'Pierre Edouard', 'George'],
      ['Jean-Philippe', 'Anas', 'Anas', 'George'],
      ['George', 'Anas', 'Pierre Edouard', 'Jean-Philippe'],
      ['Anas', 'Pierre Edouard', 'Edmond', 'Edmond'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Michael', 'Pierre Edouard', 'George', 'Pierre Edouard'],
      ['George', 'Anas', 'Pierre Edouard', 'Michael'],
      ['Michael', 'Anas', 'George', 'Jean-Philippe'],
      ['Michael', 'Michael', 'George', 'Anas'],
    ]
    const object2 = [
      ['George', 'Jean-Philippe', 'Anas', 'Edmond'],
      ['Anas', 'George', 'Jean-Philippe', 'Anas'],
      ['George', 'Michael', 'Edmond', 'Anas'],
      ['Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Michael', 'Jean-Philippe', 'Michael', 'Jean-Philippe'],
      ['Anas', 'Edmond', 'Anas', 'Anas'],
      ['Pierre Edouard', 'Anas', 'Jean-Philippe', 'Anas'],
      ['Edmond', 'Michael', 'Michael', 'Edmond'],
    ]
    const object4 = [
      ['Anas', 'Michael', 'George', 'Edmond'],
      ['Jean-Philippe', 'George', 'Michael', 'Pierre Edouard'],
      ['George', 'Edmond', 'Michael', 'Edmond'],
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = autocompleteItemRenderer(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = autocompleteItemRenderer([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('AutocompleteItems', () => {
  test('0', () => {
    const object11 = [
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
    ]
    const object6 = [
      ['4.0.0-beta1\t', '^5.0.0', '4.0.0-beta1\t', 'v1.2.4'],
      ['4.0.0-beta1\t', '^5.0.0', 'v1.2.4', 'v4.0.0-rc.4'],
      ['1.0.0', 'v1.2.4', 'v1.2.4', '4.0.0-beta1\t'],
      ['v1.2.4', 'v4.0.0-rc.4', 'v4.0.0-rc.4', '4.0.0-beta1\t'],
    ]
    const object7 = [
      ['v1.2.4', 'v4.0.0-rc.4', 'v4.0.0-rc.4', 'v1.2.4'],
      ['v4.0.0-rc.4', '1.0.0', 'v4.0.0-rc.4', '^5.0.0'],
      ['1.0.0', 'v1.2.4', '^5.0.0', '4.0.0-beta1\t'],
      ['v4.0.0-rc.4', '1.0.0', '^5.0.0', 'v4.0.0-rc.4'],
    ]
    const object8 = [
      ['^5.0.0', '4.0.0-beta1\t', 'v4.0.0-rc.4', '1.0.0'],
      ['v4.0.0-rc.4', '4.0.0-beta1\t', 'v4.0.0-rc.4', 'v4.0.0-rc.4'],
      ['4.0.0-beta1\t', '^5.0.0', '1.0.0', 'v4.0.0-rc.4'],
      ['v1.2.4', '^5.0.0', '4.0.0-beta1\t', '1.0.0'],
    ]
    const object9 = [
      ['v1.2.4', '1.0.0', 'v1.2.4', '4.0.0-beta1\t'],
      ['v4.0.0-rc.4', '4.0.0-beta1\t', '4.0.0-beta1\t', '4.0.0-beta1\t'],
      ['v1.2.4', '^5.0.0', 'v4.0.0-rc.4', '1.0.0'],
      ['1.0.0', 'v1.2.4', 'v4.0.0-rc.4', '^5.0.0'],
    ]
    const object10 = [object6, object7, object8, object9]
    const object = [
      [56784, 'a1969970175', 987650, 987650],
      [56784, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 987650],
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 12345, 'a1969970175'],
      [12, 'a1969970175', 12, 987650],
    ]
    const object2 = [
      [12345, 56784, 12345, 987650],
      [
        'bc23a9d531064583ace8f67dad60f6bb',
        'bc23a9d531064583ace8f67dad60f6bb',
        'a1969970175',
        'bc23a9d531064583ace8f67dad60f6bb',
      ],
      [12, 12345, 56784, 'bc23a9d531064583ace8f67dad60f6bb'],
      [987650, 56784, 56784, 987650],
    ]
    const object3 = [
      [987650, 12345, 'bc23a9d531064583ace8f67dad60f6bb', 12],
      [56784, 12345, 12345, 12],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 56784, 12345],
      ['a1969970175', 'bc23a9d531064583ace8f67dad60f6bb', 987650, 12],
    ]
    const object4 = [
      ['a1969970175', 12345, 56784, 56784],
      [56784, 56784, 'bc23a9d531064583ace8f67dad60f6bb', 56784],
      ['a1969970175', 'a1969970175', 987650, 987650],
      [12345, 12345, 56784, 12],
    ]
    const object5 = [object, object2, object3, object4]
    const result = AutocompleteItems({
      length: 0,
      itemSize: 16,
      getItemProps: object5,
      getMenuProps: object10,
      highlightedIndex: 0,
      index: -100,
      inputValue: { trim: () => '/path/to/file' },
      isFilterDisabled: true,
      originalItems: object11,
      popoverMaxHeight: 64,
      renderItem: 'da7588892',
      selectedItem:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      title: 'Future Interactions Representative',
      width: 25,
    })
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object11 = [
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
    ]
    const object6 = [
      ['v1.2.4', '^5.0.0', 'v1.2.4', '1.0.0'],
      ['4.0.0-beta1\t', '1.0.0', '1.0.0', '^5.0.0'],
      ['v1.2.4', 'v1.2.4', '^5.0.0', 'v1.2.4'],
      ['v1.2.4', '^5.0.0', '4.0.0-beta1\t', '1.0.0'],
    ]
    const object7 = [
      ['1.0.0', 'v4.0.0-rc.4', '4.0.0-beta1\t', 'v1.2.4'],
      ['v1.2.4', '1.0.0', 'v1.2.4', 'v1.2.4'],
      ['1.0.0', '4.0.0-beta1\t', 'v1.2.4', '^5.0.0'],
      ['1.0.0', 'v1.2.4', '1.0.0', '^5.0.0'],
    ]
    const object8 = [
      ['v4.0.0-rc.4', '4.0.0-beta1\t', '4.0.0-beta1\t', '4.0.0-beta1\t'],
      ['v4.0.0-rc.4', 'v1.2.4', '1.0.0', '4.0.0-beta1\t'],
      ['^5.0.0', '4.0.0-beta1\t', '^5.0.0', 'v1.2.4'],
      ['^5.0.0', 'v4.0.0-rc.4', '1.0.0', '1.0.0'],
    ]
    const object9 = [
      ['v1.2.4', 'v1.2.4', '1.0.0', '^5.0.0'],
      ['4.0.0-beta1\t', '^5.0.0', '1.0.0', 'v4.0.0-rc.4'],
      ['v4.0.0-rc.4', 'v1.2.4', 'v4.0.0-rc.4', '^5.0.0'],
      ['v1.2.4', 'v1.2.4', '4.0.0-beta1\t', '1.0.0'],
    ]
    const object10 = [object6, object7, object8, object9]
    const object = [
      [56784, 12345, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb'],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb'],
      [987650, 987650, 56784, 987650],
      ['a1969970175', 56784, 12345, 'bc23a9d531064583ace8f67dad60f6bb'],
    ]
    const object2 = [
      ['a1969970175', 'a1969970175', 987650, 12345],
      ['bc23a9d531064583ace8f67dad60f6bb', 987650, 56784, 12],
      [12, 987650, 12, 56784],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 12345, 987650],
    ]
    const object3 = [
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 987650],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 987650, 56784],
      [12345, 'bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 987650],
      [12345, 987650, 'a1969970175', 12],
    ]
    const object4 = [
      [12, 987650, 12345, 'a1969970175'],
      [12345, 12345, 'a1969970175', 'bc23a9d531064583ace8f67dad60f6bb'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 12345, 'a1969970175'],
      [12345, 12345, 'a1969970175', 56784],
    ]
    const object5 = [object, object2, object3, object4]
    const result = AutocompleteItems({
      length: 64,
      itemSize: 4,
      getItemProps: object5,
      getMenuProps: object10,
      highlightedIndex: 0.0,
      index: 0,
      inputValue: { trim: () => './path/to/file' },
      isFilterDisabled: true,
      originalItems: object11,
      popoverMaxHeight: 2048,
      renderItem: 'c466a48309794261b64a4f02cfcc3d64',
      selectedItem:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      title: 'Future Interactions Representative',
      width: 720,
    })
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object11 = [
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
    ]
    const object6 = [
      ['v1.2.4', '4.0.0-beta1\t', '^5.0.0', '^5.0.0'],
      ['v1.2.4', '4.0.0-beta1\t', '4.0.0-beta1\t', '^5.0.0'],
      ['^5.0.0', '1.0.0', 'v1.2.4', '4.0.0-beta1\t'],
      ['v1.2.4', 'v4.0.0-rc.4', '1.0.0', '^5.0.0'],
    ]
    const object7 = [
      ['4.0.0-beta1\t', '^5.0.0', 'v4.0.0-rc.4', '^5.0.0'],
      ['4.0.0-beta1\t', '4.0.0-beta1\t', '^5.0.0', 'v1.2.4'],
      ['v4.0.0-rc.4', '4.0.0-beta1\t', '4.0.0-beta1\t', '^5.0.0'],
      ['1.0.0', '1.0.0', '4.0.0-beta1\t', '^5.0.0'],
    ]
    const object8 = [
      ['1.0.0', '^5.0.0', 'v1.2.4', 'v4.0.0-rc.4'],
      ['4.0.0-beta1\t', 'v1.2.4', '4.0.0-beta1\t', '^5.0.0'],
      ['v1.2.4', '4.0.0-beta1\t', 'v4.0.0-rc.4', '4.0.0-beta1\t'],
      ['^5.0.0', '^5.0.0', 'v4.0.0-rc.4', '4.0.0-beta1\t'],
    ]
    const object9 = [
      ['1.0.0', '^5.0.0', '^5.0.0', '^5.0.0'],
      ['^5.0.0', '^5.0.0', 'v1.2.4', '1.0.0'],
      ['4.0.0-beta1\t', 'v1.2.4', '^5.0.0', '^5.0.0'],
      ['v4.0.0-rc.4', '1.0.0', 'v1.2.4', 'v1.2.4'],
    ]
    const object10 = [object6, object7, object8, object9]
    const object = [
      ['a1969970175', 'a1969970175', 987650, 'a1969970175'],
      [987650, 'bc23a9d531064583ace8f67dad60f6bb', 56784, 12],
      ['bc23a9d531064583ace8f67dad60f6bb', 12345, 56784, 987650],
      ['a1969970175', 987650, 'bc23a9d531064583ace8f67dad60f6bb', 987650],
    ]
    const object2 = [
      ['a1969970175', 'bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 12],
      [987650, 987650, 56784, 56784],
      [56784, 987650, 12, 56784],
      [12, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 987650],
    ]
    const object3 = [
      [987650, 987650, 'bc23a9d531064583ace8f67dad60f6bb', 12345],
      [987650, 12345, 'a1969970175', 'bc23a9d531064583ace8f67dad60f6bb'],
      [56784, 987650, 56784, 12345],
      [12345, 'a1969970175', 'a1969970175', 'a1969970175'],
    ]
    const object4 = [
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 12345, 'a1969970175'],
      ['a1969970175', 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 987650],
      [12345, 12345, 'a1969970175', 12],
      [12, 56784, 12, 'bc23a9d531064583ace8f67dad60f6bb'],
    ]
    const object5 = [object, object2, object3, object4]
    const result = AutocompleteItems({
      length: 10,
      itemSize: 128,
      getItemProps: object5,
      getMenuProps: object10,
      highlightedIndex: 0.0,
      index: -100,
      inputValue: { trim: () => 'C:\\\\path\\to\\folder\\' },
      isFilterDisabled: false,
      originalItems: object11,
      popoverMaxHeight: 720,
      renderItem: '12345',
      selectedItem:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      title: 'Future Interactions Representative',
      width: 9,
    })
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object11 = [
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
    ]
    const object6 = [
      ['v1.2.4', 'v1.2.4', 'v1.2.4', 'v1.2.4'],
      ['4.0.0-beta1\t', 'v1.2.4', '^5.0.0', '^5.0.0'],
      ['1.0.0', '4.0.0-beta1\t', 'v1.2.4', '4.0.0-beta1\t'],
      ['^5.0.0', '1.0.0', '1.0.0', '^5.0.0'],
    ]
    const object7 = [
      ['v4.0.0-rc.4', 'v1.2.4', '4.0.0-beta1\t', '4.0.0-beta1\t'],
      ['v1.2.4', '4.0.0-beta1\t', '4.0.0-beta1\t', 'v4.0.0-rc.4'],
      ['v1.2.4', 'v1.2.4', '^5.0.0', 'v4.0.0-rc.4'],
      ['v4.0.0-rc.4', '^5.0.0', 'v4.0.0-rc.4', 'v4.0.0-rc.4'],
    ]
    const object8 = [
      ['4.0.0-beta1\t', '4.0.0-beta1\t', '4.0.0-beta1\t', 'v1.2.4'],
      ['4.0.0-beta1\t', '1.0.0', '^5.0.0', '4.0.0-beta1\t'],
      ['^5.0.0', 'v1.2.4', '^5.0.0', '^5.0.0'],
      ['^5.0.0', 'v1.2.4', 'v4.0.0-rc.4', 'v1.2.4'],
    ]
    const object9 = [
      ['v4.0.0-rc.4', 'v4.0.0-rc.4', '^5.0.0', '4.0.0-beta1\t'],
      ['v4.0.0-rc.4', '1.0.0', '^5.0.0', '^5.0.0'],
      ['4.0.0-beta1\t', 'v1.2.4', '1.0.0', 'v1.2.4'],
      ['v1.2.4', '4.0.0-beta1\t', '1.0.0', 'v1.2.4'],
    ]
    const object10 = [object6, object7, object8, object9]
    const object = [
      [12345, 12345, 56784, 56784],
      [56784, 987650, 987650, 987650],
      ['bc23a9d531064583ace8f67dad60f6bb', 12345, 987650, 'bc23a9d531064583ace8f67dad60f6bb'],
      ['bc23a9d531064583ace8f67dad60f6bb', 12345, 'a1969970175', 12],
    ]
    const object2 = [
      [56784, 987650, 12345, 'bc23a9d531064583ace8f67dad60f6bb'],
      [987650, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 12],
      [12, 'a1969970175', 987650, 'a1969970175'],
      ['a1969970175', 12345, 12345, 12],
    ]
    const object3 = [
      [56784, 'a1969970175', 'a1969970175', 'a1969970175'],
      [12345, 'bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 'a1969970175'],
      ['bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb', 56784, 56784],
      [12, 'bc23a9d531064583ace8f67dad60f6bb', 12345, 'a1969970175'],
    ]
    const object4 = [
      [56784, 'a1969970175', 12345, 'a1969970175'],
      ['a1969970175', 'a1969970175', 12345, 56784],
      [56784, 'bc23a9d531064583ace8f67dad60f6bb', 56784, 'bc23a9d531064583ace8f67dad60f6bb'],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 12345, 987650],
    ]
    const object5 = [object, object2, object3, object4]
    const result = AutocompleteItems({
      length: 16,
      itemSize: 1,
      getItemProps: object5,
      getMenuProps: object10,
      highlightedIndex: 0,
      index: 0,
      inputValue: { trim: () => 'path/to/file.ext' },
      isFilterDisabled: true,
      originalItems: object11,
      popoverMaxHeight: 16,
      renderItem: 'da7588892',
      selectedItem:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      title: 'Direct Functionality Orchestrator',
      width: 2048,
    })
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object11 = [
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
      [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      ],
    ]
    const object6 = [
      ['v4.0.0-rc.4', '4.0.0-beta1\t', '^5.0.0', 'v4.0.0-rc.4'],
      ['4.0.0-beta1\t', 'v1.2.4', '4.0.0-beta1\t', '4.0.0-beta1\t'],
      ['4.0.0-beta1\t', 'v4.0.0-rc.4', 'v4.0.0-rc.4', 'v1.2.4'],
      ['^5.0.0', '1.0.0', '4.0.0-beta1\t', 'v1.2.4'],
    ]
    const object7 = [
      ['v4.0.0-rc.4', '^5.0.0', '4.0.0-beta1\t', 'v1.2.4'],
      ['v4.0.0-rc.4', '^5.0.0', '4.0.0-beta1\t', 'v4.0.0-rc.4'],
      ['v1.2.4', 'v1.2.4', 'v4.0.0-rc.4', '1.0.0'],
      ['v4.0.0-rc.4', 'v4.0.0-rc.4', 'v1.2.4', '4.0.0-beta1\t'],
    ]
    const object8 = [
      ['v1.2.4', '4.0.0-beta1\t', '1.0.0', '1.0.0'],
      ['4.0.0-beta1\t', 'v1.2.4', '^5.0.0', 'v4.0.0-rc.4'],
      ['^5.0.0', '1.0.0', 'v1.2.4', '4.0.0-beta1\t'],
      ['^5.0.0', '^5.0.0', '^5.0.0', 'v4.0.0-rc.4'],
    ]
    const object9 = [
      ['v1.2.4', '^5.0.0', '4.0.0-beta1\t', 'v4.0.0-rc.4'],
      ['v4.0.0-rc.4', '4.0.0-beta1\t', '^5.0.0', 'v1.2.4'],
      ['v4.0.0-rc.4', '1.0.0', '4.0.0-beta1\t', '^5.0.0'],
      ['4.0.0-beta1\t', 'v1.2.4', '^5.0.0', '4.0.0-beta1\t'],
    ]
    const object10 = [object6, object7, object8, object9]
    const object = [
      [12345, 12345, 12, 56784],
      [12, 'bc23a9d531064583ace8f67dad60f6bb', 12, 12345],
      ['a1969970175', 'a1969970175', 12, 12345],
      [56784, 56784, 'bc23a9d531064583ace8f67dad60f6bb', 12],
    ]
    const object2 = [
      [987650, 987650, 987650, 12345],
      ['bc23a9d531064583ace8f67dad60f6bb', 987650, 12345, 12345],
      [12, 12, 12345, 12345],
      [12, 987650, 987650, 'bc23a9d531064583ace8f67dad60f6bb'],
    ]
    const object3 = [
      ['bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 12, 'a1969970175'],
      [12, 987650, 'a1969970175', 987650],
      ['bc23a9d531064583ace8f67dad60f6bb', 12, 'bc23a9d531064583ace8f67dad60f6bb', 'bc23a9d531064583ace8f67dad60f6bb'],
      ['a1969970175', 12345, 12, 'bc23a9d531064583ace8f67dad60f6bb'],
    ]
    const object4 = [
      ['a1969970175', 12, 12, 12345],
      ['bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 12345, 'a1969970175'],
      ['bc23a9d531064583ace8f67dad60f6bb', 56784, 987650, 12345],
      ['bc23a9d531064583ace8f67dad60f6bb', 'a1969970175', 'bc23a9d531064583ace8f67dad60f6bb', 12],
    ]
    const object5 = [object, object2, object3, object4]
    const result = AutocompleteItems({
      length: 32,
      itemSize: 16,
      getItemProps: object5,
      getMenuProps: object10,
      highlightedIndex: 0,
      index: -1,
      inputValue: { trim: () => 'C:\\\\path\\to\\folder\\' },
      isFilterDisabled: true,
      originalItems: object11,
      popoverMaxHeight: 400,
      renderItem: '12345',
      selectedItem:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
      title: 'Dynamic Quality Specialist',
      width: 80.0,
    })
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = AutocompleteItems({
      length: NaN,
      itemSize: NaN,
      getItemProps: [],
      getMenuProps: [],
      highlightedIndex: NaN,
      index: NaN,
      inputValue: { trim: () => '' },
      isFilterDisabled: false,
      originalItems: [],
      popoverMaxHeight: NaN,
      renderItem: '',
      selectedItem: '',
      title: '',
      width: NaN,
    })
    expect(result).toMatchSnapshot()
  })
})
