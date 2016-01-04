var _ = require('../../')

describe('test/lib/lodash_range.test.js', function () {
  describe('#inRange', function () {
    it('_.inRange(3, 2, 4)', function () {
      _.inRange(3, 2, 4).should.true()
    })

    it('_.inRange(4, 8)', function () {
      _.inRange(4, 8).should.true()
    })

    it('_.inRange(4, 2)', function () {
      _.inRange(4, 2).should.false()
    })

    it('_.inRange(2, 2)', function () {
      _.inRange(2, 2).should.false()
    })

    it('_.inRange(1.2, 2)', function () {
      _.inRange(1.2, 2).should.true()
    })

    it('_.inRange(5.2, 4)', function () {
      _.inRange(5.2, 4).should.false()
    })
  })

  describe('#random', function () {
    function cover(fn, range) {
      var obj = {};

      range.forEach(function (num) {
        obj[num] = false;
      })

      for (var i = 0; i < 100000; i++) {
        obj[fn()] = true;
      }

      for (var k in obj) {
        obj[k].should.true()
      }

      Object.keys(obj).length.should.eql(range.length)
    }

    it('_.random(5)', function () {
      cover(function () {
        return _.random(5)
      }, [0, 1, 2, 3, 4, 5])
    })

    it('_.random(1, 5)', function () {
      cover(function () {
        return _.random(1, 5)
      }, [1, 2, 3, 4, 5])
    })

    it('_.random(4, 5)', function () {
      cover(function () {
        return _.random(4, 5)
      }, [4, 5])
    })
  })
})