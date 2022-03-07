const rewire = require('rewire')
const block_navigation = rewire('../../../.coverage/lcov-report/block-navigation')
const jumpToCode = block_navigation.__get__('jumpToCode')
// @ponicode
describe('jumpToCode', () => {
  test('0', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper0"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: 80.0 })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper0')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper0'))
  })

  test('1', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper1"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: 66 })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper1')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper1'))
  })

  test('2', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper2"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: 65.0 })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper2')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper2'))
  })

  test('3', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper3"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: 76 })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper3')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper3'))
  })

  test('4', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper4"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: 74.0 })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper4')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper4'))
  })

  test('5', () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div id="wrapper5"><div>
        	<div id="fileSearch"></div>
        </div>
        </div>`
    )
    let result = jumpToCode({ which: -Infinity })
    expect(result).toMatchSnapshot()
    expect(document.getElementById('wrapper5')).to.matchSnapshot()
    document.body.removeChild(document.getElementById('wrapper5'))
  })
})
