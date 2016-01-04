var lodash = require('../lodash');
var should = require('should')

describe('test/lodash.test.js', function () {
  it('should give me 5', function () {
    lodash.giveme5().should.eql(5)
  })
})
