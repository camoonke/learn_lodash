var lodash = require('../../')

describe('test/lib/lodash_date.test.js', function () {
  it('#now', function () {
    var t1 = Date.now()
    var t2
    var t3

    setTimeout(function () {
      t2 = lodash.now()

      setTimeout(function () {
        t3 = Date.now()

        (t2 - t1).should.above(0)
        (t3 - t2).should.above(0)
      }, 5)
    }, 5)

  })
})