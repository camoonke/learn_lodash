var lodash = require('../../lib/lodash_array');

describe('test/lodash.test.js', function () {
  describe('Arrays', function () {
    describe('#chunk', function () {
      it('should split the Array into chunks', function () {
        var arr = ['a', 'b', 'c', 'd', 'e', 'f']
        lodash.chunk(arr, 2).should.eql([['a', 'b'], ['c', 'd'], ['e', 'f']])
      })
    })
  })
})
