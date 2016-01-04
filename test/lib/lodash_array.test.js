var _ = require('../../');

describe('test/lodash_array.test.js', function () {
  describe('Arrays', function () {
    describe('#chunk', function () {
      it('should split the Array into chunks', function () {
        var arr = ['a', 'b', 'c', 'd', 'e', 'f']
        _.chunk(arr, 2).should.eql([['a', 'b'], ['c', 'd'], ['e', 'f']])
      })
    })

    describe('#compact', function () {
      it('should filter all falsey values', function () {
        _.compact([0, 1, 2, false, null, 0, '', "", void 0, NaN])
          .should.eql([1, 2])
      })
    })
  })
})
