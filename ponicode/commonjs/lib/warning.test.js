const warning = require('../../../commonjs/lib/warning')
// @ponicode
describe('warning.default', () => {
  test('0', () => {
    const param2 = [
      [
        '',
        'No updates are to be performed.',
        'Message recipient is the same as originator',
        'Sorry, The video you are looking for does not exist.',
      ],
      ['An error occurred processing your request.', '', 'Internal Server Error\n', 'Exception not raised: %s'],
      [
        'To force deletion of the LAG use delete_force: True',
        'Counterparty sent error: %s',
        'To force deletion of the LAG use delete_force: True',
        'Sorry, The video you are looking for does not exist.',
      ],
      ['cannot be found.', 'The app does not exist', 'Missing FileUri configuration', 'Error selecting from database'],
    ]
    const result = warning.default('dedicated', param2)
    expect(result).toMatchSnapshot()
  })

  test('1', () => {
    const param2 = [
      [
        'Uploaded file was not added to the resource. ',
        'To force deletion of the LAG use delete_force: True',
        'There is a mismatch',
        'Could not find an existing submission in location.  rubric is original.',
      ],
      [
        'Ran out of iterations',
        'Invalid [%s] value. %s',
        'Missing FileUri configuration',
        'Grader id does not match submission id that was passed in',
      ],
      ['Unknown Error', 'Error selecting from database', 'There is a mismatch', 'Ran out of iterations'],
      [
        'The line-by-line profiler can only be used in dev.',
        'unexpected error',
        'Missing FileUri configuration',
        'Bad Authentication data',
      ],
    ]
    const result = warning.default('dedicated', param2)
    expect(result).toMatchSnapshot()
  })

  test('2', () => {
    const param2 = [
      [
        'An error occurred processing your request.',
        'Wait time out reached, while waiting for results',
        'Empty name specified',
        'New Error ',
      ],
      ['No updates are to be performed.', 'Mock Error Message', 'Mock Error Message', ''],
      [
        'No os dependencies found. ',
        'Empty name specified',
        'New Error ',
        'Could not find a grader object for message from xqueue',
      ],
      ['', 'Uploaded file was not added to the resource. ', 'There is a mismatch', 'Exception not raised: %s'],
    ]
    const result = warning.default('methodical', param2)
    expect(result).toMatchSnapshot()
  })

  test('3', () => {
    const param2 = [
      [
        'Exception not raised: %s',
        '\n\nThe first error message:\n',
        'This is an exception, voilà',
        'No updates are to be performed.',
      ],
      [
        '',
        'No os dependencies found. ',
        'Sorry, This video cannot be accessed via this website',
        'Connection is closed',
      ],
      ['missing encoding', '', 'Error:', ''],
      [
        "Top level object in 'override.yml' needs to be an object",
        'There is a mismatch',
        'Wait time out reached, while waiting for results',
        'Error getting key from: %s',
      ],
    ]
    const result = warning.default('methodical', param2)
    expect(result).toMatchSnapshot()
  })

  test('4', () => {
    const param2 = [
      [
        'Invalid Invitation Token.',
        'This is an exception, voilà',
        'Error selecting from database',
        'Uploaded file was not added to the resource. ',
      ],
      [
        'The app does not exist',
        'An error occurred processing your request.',
        'Message originator is not the grader, or the person being graded',
        'Message recipient is not the grader, the person being graded, or the controller',
      ],
      [
        'Empty name specified',
        'Unable to find your git executable - Shutdown SickBeard and EITHER <a href="http://code.google.com/p/sickbeard/wiki/AdvancedSettings" onclick="window.open(this.href); return false;">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.',
        'Message recipient is not the grader, the person being graded, or the controller',
        'Internal Server Error\n',
      ],
      ['Missing FileUri configuration', 'The app does not exist', 'New Error ', 'Error in retrieving email.'],
    ]
    const result = warning.default('methodical', param2)
    expect(result).toMatchSnapshot()
  })

  test('5', () => {
    const result = warning.default('', [])
    expect(result).toMatchSnapshot()
  })
})
