var _ = require('../../')

describe('test/lib/lodash_date.test.js', function () {
  it('#now', function () {
    (_.now() >= +new Date).should.true()
  })
})