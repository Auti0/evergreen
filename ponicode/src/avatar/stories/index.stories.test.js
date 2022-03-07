const rewire = require('rewire')
const index_stories = rewire('../../../../src/avatar/stories/index.stories')
const StoryHeader = index_stories.__get__('StoryHeader')
const StoryDescription = index_stories.__get__('StoryDescription')
const StoryHeading = index_stories.__get__('StoryHeading')
// @ponicode
describe('StoryHeader', () => {
  test('0', () => {
    const object = [
      ['Pierre Edouard', 'Michael', 'George', 'George'],
      ['Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard', 'Michael'],
      ['Michael', 'Pierre Edouard', 'Edmond', 'Pierre Edouard'],
      ['Jean-Philippe', 'Anas', 'George', 'Anas'],
    ]
    const object2 = [
      ['Anas', 'Anas', 'George', 'Pierre Edouard'],
      ['Michael', 'Anas', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'Jean-Philippe', 'Edmond', 'Michael'],
      ['Anas', 'George', 'Anas', 'George'],
    ]
    const object3 = [
      ['Michael', 'George', 'Pierre Edouard', 'Jean-Philippe'],
      ['Edmond', 'Pierre Edouard', 'George', 'Pierre Edouard'],
      ['Edmond', 'Pierre Edouard', 'Michael', 'Michael'],
      ['Edmond', 'Pierre Edouard', 'George', 'George'],
    ]
    const object4 = [
      ['Pierre Edouard', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'George'],
      ['Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Jean-Philippe', 'George', 'Anas', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeader(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['George', 'Michael', 'Anas', 'Edmond'],
      ['Jean-Philippe', 'Michael', 'George', 'Anas'],
      ['George', 'Jean-Philippe', 'Anas', 'Edmond'],
      ['Edmond', 'George', 'George', 'Anas'],
    ]
    const object2 = [
      ['Michael', 'Edmond', 'Edmond', 'Jean-Philippe'],
      ['Edmond', 'Pierre Edouard', 'Jean-Philippe', 'Michael'],
      ['Michael', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'George'],
    ]
    const object3 = [
      ['Edmond', 'Jean-Philippe', 'George', 'Edmond'],
      ['Pierre Edouard', 'George', 'Anas', 'George'],
      ['George', 'Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe'],
      ['George', 'Edmond', 'Anas', 'Edmond'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
      ['Anas', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Anas', 'George', 'Michael', 'Jean-Philippe'],
      ['Anas', 'Edmond', 'Michael', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeader(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'George'],
      ['Michael', 'George', 'George', 'Jean-Philippe'],
      ['George', 'Edmond', 'Pierre Edouard', 'Anas'],
      ['Jean-Philippe', 'Anas', 'Anas', 'Edmond'],
    ]
    const object2 = [
      ['George', 'George', 'Edmond', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Michael', 'Jean-Philippe'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'Anas', 'Edmond', 'Michael'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Jean-Philippe', 'Michael', 'Jean-Philippe'],
      ['Jean-Philippe', 'George', 'George', 'Jean-Philippe'],
      ['Edmond', 'Anas', 'George', 'Edmond'],
      ['George', 'George', 'George', 'Edmond'],
    ]
    const object4 = [
      ['Pierre Edouard', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Pierre Edouard', 'George', 'George', 'George'],
      ['Anas', 'Anas', 'Edmond', 'George'],
      ['Edmond', 'Pierre Edouard', 'Michael', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeader(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Michael', 'Jean-Philippe', 'Anas', 'Pierre Edouard'],
      ['Michael', 'Jean-Philippe', 'Michael', 'Edmond'],
      ['Michael', 'Anas', 'Edmond', 'Pierre Edouard'],
      ['Jean-Philippe', 'Jean-Philippe', 'Michael', 'George'],
    ]
    const object2 = [
      ['George', 'Anas', 'Pierre Edouard', 'Michael'],
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'Pierre Edouard'],
      ['Anas', 'Michael', 'Jean-Philippe', 'Michael'],
      ['Jean-Philippe', 'Anas', 'Pierre Edouard', 'Edmond'],
    ]
    const object3 = [
      ['Edmond', 'George', 'Jean-Philippe', 'Michael'],
      ['George', 'George', 'George', 'Michael'],
      ['Edmond', 'George', 'Anas', 'Edmond'],
      ['Pierre Edouard', 'Edmond', 'Edmond', 'Edmond'],
    ]
    const object4 = [
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'George'],
      ['Anas', 'George', 'Anas', 'George'],
      ['Anas', 'Pierre Edouard', 'Pierre Edouard', 'Michael'],
      ['Anas', 'Pierre Edouard', 'George', 'Jean-Philippe'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeader(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Jean-Philippe', 'Edmond', 'George', 'Pierre Edouard'],
      ['Anas', 'Jean-Philippe', 'George', 'Edmond'],
      ['Michael', 'Edmond', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Michael', 'George', 'Anas'],
    ]
    const object2 = [
      ['Anas', 'George', 'George', 'Pierre Edouard'],
      ['Jean-Philippe', 'Anas', 'Anas', 'Michael'],
      ['Pierre Edouard', 'Michael', 'Michael', 'Anas'],
      ['George', 'Anas', 'Jean-Philippe', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Edmond', 'Michael', 'Jean-Philippe', 'Michael'],
      ['Jean-Philippe', 'Jean-Philippe', 'Edmond', 'Anas'],
      ['Anas', 'Anas', 'George', 'Pierre Edouard'],
      ['Michael', 'George', 'Edmond', 'George'],
    ]
    const object4 = [
      ['Michael', 'Anas', 'George', 'George'],
      ['Edmond', 'Pierre Edouard', 'Michael', 'Pierre Edouard'],
      ['Anas', 'George', 'George', 'Michael'],
      ['Pierre Edouard', 'George', 'Edmond', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeader(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = StoryHeader([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('StoryDescription', () => {
  test('0', () => {
    const object = [
      ['Pierre Edouard', 'Edmond', 'Edmond', 'Michael'],
      ['Edmond', 'Pierre Edouard', 'George', 'Pierre Edouard'],
      ['Jean-Philippe', 'Pierre Edouard', 'George', 'Michael'],
      ['Jean-Philippe', 'Anas', 'George', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Michael', 'Anas', 'Michael', 'Anas'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'Pierre Edouard'],
      ['Edmond', 'Jean-Philippe', 'Pierre Edouard', 'Michael'],
      ['Pierre Edouard', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe'],
      ['Edmond', 'Michael', 'Pierre Edouard', 'Jean-Philippe'],
      ['George', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'George', 'Edmond', 'Michael'],
    ]
    const object4 = [
      ['Pierre Edouard', 'Jean-Philippe', 'Edmond', 'Jean-Philippe'],
      ['George', 'Pierre Edouard', 'Anas', 'Pierre Edouard'],
      ['Jean-Philippe', 'Edmond', 'Michael', 'Edmond'],
      ['Pierre Edouard', 'Pierre Edouard', 'Michael', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryDescription(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Edmond', 'Michael', 'Edmond', 'Michael'],
      ['Michael', 'Pierre Edouard', 'Michael', 'Anas'],
      ['Michael', 'Jean-Philippe', 'Michael', 'Michael'],
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'George'],
    ]
    const object2 = [
      ['Michael', 'Michael', 'Anas', 'Michael'],
      ['Anas', 'Edmond', 'George', 'George'],
      ['Michael', 'George', 'Anas', 'Pierre Edouard'],
      ['Jean-Philippe', 'George', 'Pierre Edouard', 'Michael'],
    ]
    const object3 = [
      ['Edmond', 'George', 'Pierre Edouard', 'Edmond'],
      ['Jean-Philippe', 'Michael', 'Pierre Edouard', 'Anas'],
      ['Anas', 'Anas', 'George', 'Michael'],
      ['Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
    ]
    const object4 = [
      ['George', 'Jean-Philippe', 'Michael', 'Anas'],
      ['George', 'Pierre Edouard', 'George', 'Anas'],
      ['George', 'George', 'Anas', 'George'],
      ['Edmond', 'George', 'Michael', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryDescription(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Pierre Edouard', 'George', 'Jean-Philippe', 'George'],
      ['Anas', 'Michael', 'Pierre Edouard', 'Pierre Edouard'],
      ['Michael', 'Pierre Edouard', 'Edmond', 'George'],
      ['George', 'Anas', 'Edmond', 'Anas'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Anas', 'Anas', 'George'],
      ['Michael', 'Pierre Edouard', 'Michael', 'George'],
      ['Pierre Edouard', 'George', 'Edmond', 'Anas'],
      ['Anas', 'Michael', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object3 = [
      ['George', 'Anas', 'Jean-Philippe', 'Jean-Philippe'],
      ['George', 'Anas', 'George', 'Edmond'],
      ['Anas', 'Edmond', 'Anas', 'Michael'],
      ['Edmond', 'Michael', 'Pierre Edouard', 'Edmond'],
    ]
    const object4 = [
      ['George', 'George', 'Anas', 'Edmond'],
      ['Jean-Philippe', 'George', 'Anas', 'Anas'],
      ['George', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Anas', 'Jean-Philippe', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryDescription(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'Edmond'],
      ['Anas', 'Pierre Edouard', 'Jean-Philippe', 'Pierre Edouard'],
      ['Michael', 'George', 'Edmond', 'Edmond'],
      ['Jean-Philippe', 'Anas', 'George', 'Edmond'],
    ]
    const object2 = [
      ['Edmond', 'Anas', 'George', 'Anas'],
      ['George', 'Pierre Edouard', 'Anas', 'George'],
      ['Jean-Philippe', 'Anas', 'Jean-Philippe', 'Michael'],
      ['George', 'Jean-Philippe', 'George', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Michael', 'Anas', 'George', 'Pierre Edouard'],
      ['George', 'George', 'Jean-Philippe', 'George'],
      ['Anas', 'George', 'George', 'Edmond'],
      ['Pierre Edouard', 'George', 'Pierre Edouard', 'George'],
    ]
    const object4 = [
      ['George', 'Michael', 'Jean-Philippe', 'Michael'],
      ['George', 'Michael', 'Anas', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'George'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryDescription(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['Jean-Philippe', 'Edmond', 'Edmond', 'Michael'],
      ['Edmond', 'Edmond', 'Pierre Edouard', 'Pierre Edouard'],
      ['Michael', 'Michael', 'George', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Edmond', 'Edmond'],
    ]
    const object2 = [
      ['Edmond', 'George', 'Pierre Edouard', 'Jean-Philippe'],
      ['George', 'George', 'Edmond', 'Pierre Edouard'],
      ['Michael', 'Edmond', 'Michael', 'Pierre Edouard'],
      ['George', 'Anas', 'Pierre Edouard', 'Anas'],
    ]
    const object3 = [
      ['Anas', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Michael', 'George', 'Pierre Edouard', 'Edmond'],
      ['Pierre Edouard', 'Anas', 'Jean-Philippe', 'Michael'],
      ['Pierre Edouard', 'Edmond', 'Pierre Edouard', 'Anas'],
    ]
    const object4 = [
      ['Michael', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'Jean-Philippe'],
      ['Anas', 'George', 'Pierre Edouard', 'Anas'],
      ['Pierre Edouard', 'Edmond', 'Edmond', 'George'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryDescription(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = StoryDescription([])
    expect(result).toMatchSnapshot()
  })
})

// @ponicode
describe('StoryHeading', () => {
  test('0', () => {
    const object = [
      ['Pierre Edouard', 'George', 'Michael', 'Jean-Philippe'],
      ['Edmond', 'Edmond', 'Anas', 'Michael'],
      ['Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard', 'Anas'],
      ['Jean-Philippe', 'Jean-Philippe', 'Michael', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Michael', 'George', 'Pierre Edouard', 'Michael'],
      ['Anas', 'Edmond', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'Anas', 'Michael', 'Edmond'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'Jean-Philippe'],
    ]
    const object3 = [
      ['Anas', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Jean-Philippe', 'Edmond', 'George'],
      ['Michael', 'Michael', 'Jean-Philippe', 'George'],
      ['Jean-Philippe', 'Pierre Edouard', 'George', 'Pierre Edouard'],
    ]
    const object4 = [
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'Anas'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Pierre Edouard'],
      ['Michael', 'Pierre Edouard', 'Michael', 'Jean-Philippe'],
      ['Pierre Edouard', 'Edmond', 'Anas', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeading(param1)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const object = [
      ['Jean-Philippe', 'George', 'George', 'Jean-Philippe'],
      ['Jean-Philippe', 'George', 'George', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'George', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'Edmond', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Anas', 'Edmond', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'George', 'George', 'Anas'],
      ['Anas', 'Michael', 'Jean-Philippe', 'Pierre Edouard'],
      ['Edmond', 'Edmond', 'Pierre Edouard', 'George'],
    ]
    const object3 = [
      ['George', 'Edmond', 'Pierre Edouard', 'George'],
      ['Michael', 'Michael', 'Edmond', 'Michael'],
      ['Jean-Philippe', 'Michael', 'Jean-Philippe', 'Edmond'],
      ['George', 'Edmond', 'George', 'George'],
    ]
    const object4 = [
      ['Michael', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Michael', 'Pierre Edouard', 'Edmond', 'Michael'],
      ['Jean-Philippe', 'Anas', 'George', 'Jean-Philippe'],
      ['Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeading(param1)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const object = [
      ['Edmond', 'Michael', 'Anas', 'Michael'],
      ['Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe', 'Jean-Philippe'],
      ['George', 'Edmond', 'Edmond', 'Pierre Edouard'],
      ['Edmond', 'George', 'Pierre Edouard', 'Michael'],
    ]
    const object2 = [
      ['Jean-Philippe', 'Michael', 'Anas', 'Pierre Edouard'],
      ['Anas', 'Anas', 'Edmond', 'Jean-Philippe'],
      ['Pierre Edouard', 'Michael', 'Anas', 'Michael'],
      ['Jean-Philippe', 'Jean-Philippe', 'George', 'Michael'],
    ]
    const object3 = [
      ['Michael', 'Michael', 'Edmond', 'Pierre Edouard'],
      ['Edmond', 'Pierre Edouard', 'Anas', 'Edmond'],
      ['Jean-Philippe', 'Jean-Philippe', 'Pierre Edouard', 'Michael'],
      ['Anas', 'Pierre Edouard', 'Michael', 'Michael'],
    ]
    const object4 = [
      ['Edmond', 'Pierre Edouard', 'Pierre Edouard', 'Pierre Edouard'],
      ['George', 'Edmond', 'Anas', 'George'],
      ['Edmond', 'Jean-Philippe', 'Jean-Philippe', 'Michael'],
      ['Edmond', 'George', 'Pierre Edouard', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeading(param1)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const object = [
      ['Edmond', 'Michael', 'Jean-Philippe', 'Pierre Edouard'],
      ['George', 'Pierre Edouard', 'Jean-Philippe', 'Jean-Philippe'],
      ['Jean-Philippe', 'Edmond', 'Pierre Edouard', 'George'],
      ['Jean-Philippe', 'Michael', 'Michael', 'Pierre Edouard'],
    ]
    const object2 = [
      ['Pierre Edouard', 'Anas', 'Michael', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'Anas', 'George'],
      ['George', 'Pierre Edouard', 'George', 'George'],
      ['George', 'Anas', 'Pierre Edouard', 'Michael'],
    ]
    const object3 = [
      ['Pierre Edouard', 'Anas', 'Pierre Edouard', 'Pierre Edouard'],
      ['George', 'Michael', 'George', 'Michael'],
      ['Edmond', 'Edmond', 'Michael', 'Michael'],
      ['Edmond', 'Michael', 'Jean-Philippe', 'George'],
    ]
    const object4 = [
      ['Pierre Edouard', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Edmond', 'Jean-Philippe', 'Anas', 'Michael'],
      ['Anas', 'George', 'Michael', 'Pierre Edouard'],
      ['Pierre Edouard', 'Michael', 'Jean-Philippe', 'Anas'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeading(param1)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const object = [
      ['George', 'Anas', 'Edmond', 'Michael'],
      ['Anas', 'Jean-Philippe', 'Pierre Edouard', 'George'],
      ['Anas', 'Jean-Philippe', 'Michael', 'Pierre Edouard'],
      ['Edmond', 'Michael', 'Edmond', 'Jean-Philippe'],
    ]
    const object2 = [
      ['Jean-Philippe', 'George', 'Jean-Philippe', 'George'],
      ['Jean-Philippe', 'Jean-Philippe', 'Anas', 'Edmond'],
      ['Pierre Edouard', 'Anas', 'Jean-Philippe', 'Edmond'],
      ['Michael', 'Pierre Edouard', 'Anas', 'Michael'],
    ]
    const object3 = [
      ['Michael', 'Pierre Edouard', 'Edmond', 'Anas'],
      ['Edmond', 'Jean-Philippe', 'George', 'George'],
      ['Pierre Edouard', 'Anas', 'George', 'Jean-Philippe'],
      ['Pierre Edouard', 'George', 'George', 'Michael'],
    ]
    const object4 = [
      ['Anas', 'George', 'Anas', 'Edmond'],
      ['George', 'George', 'Michael', 'Pierre Edouard'],
      ['Michael', 'George', 'Edmond', 'Jean-Philippe'],
      ['Jean-Philippe', 'Anas', 'Anas', 'Pierre Edouard'],
    ]
    const param1 = [object, object2, object3, object4]
    const result = StoryHeading(param1)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = StoryHeading([])
    expect(result).toMatchSnapshot()
  })
})
