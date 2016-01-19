var _ = require('../../');

describe('test/lodash_array.test.js', function () {
  describe('Arrays', function () {
    describe('#chunk', function () {
      it('_.chunk(arr, 2)', function () {
        var arr = ['a', 'b', 'c', 'd', 'e', 'f']
        _.chunk(arr, 2).should.eql([['a', 'b'], ['c', 'd'], ['e', 'f']])
      })
    })

    describe('#compact', function () {
      it('_.compact([0, 1, 2, false, null, 0, \'\', "", void 0, NaN])', function () {
        _.compact([0, 1, 2, false, null, 0, '', "", void 0, NaN])
          .should.eql([1, 2])
      })
    })

    describe('#concat', function () {
      it('_.concat(array, 2, [3], [[4]])', function () {
        var array = [1]
        _.concat(array, 2, [3], [[4]])
          .should.eql([1, 2, 3, [4]])
      })
    })

    describe('#difference', function () {
      it('_.difference()', function () {
        _.difference()
          .should.eql([])
      })

      it('_.difference([1, 2, 3])', function () {
        _.difference([1, 2, 3])
          .should.eql([1, 2, 3])
      })

      it('_.difference([1, 2, 3], [4, 2], [4, 1])', function () {
        _.difference([1, 2, 3], [4, 2], [4, 1])
          .should.eql([3])
      })

      it('_.difference([1, 2, 3], [4, 2])', function () {
        _.difference([1, 2, 3], [4, 2])
          .should.eql([1, 3])
      })
    })

    describe('#drop', function () {
      it('_.drop([1, 2, 3])', function () {
        _.drop([1, 2, 3])
          .should.eql([2, 3])
      })

      it('_.drop([1, 2, 3], 2)', function () {
        _.drop([1, 2, 3], 2)
          .should.eql([3])
      })
      
      it('_.drop([1, 2, 3], 5)', function () {
        _.drop([1, 2, 3], 5)
          .should.eql([])
      })

      it('_.drop([1, 2, 3], 0)', function () {
        _.drop([1, 2, 3], 0)
          .should.eql([1, 2, 3])
      })
    })

    describe('#dropRight', function () {
      it('_.dropRight([1, 2, 3])', function () {
        _.dropRight([1, 2, 3])
          .should.eql([1, 2])
      })

      it('_.dropRight([1, 2, 3], 2)', function () {
        _.dropRight([1, 2, 3], 2)
          .should.eql([1])
      })
      
      it('_.dropRight([1, 2, 3], 5)', function () {
        _.dropRight([1, 2, 3], 5)
          .should.eql([])
      })

      it('_.dropRight([1, 2, 3], 0)', function () {
        _.dropRight([1, 2, 3], 0)
          .should.eql([1, 2, 3])
      })
    })

    describe('#dropRightWhile', function () {
      it('_.dropRightWhile([1, 2, 3], function', function () {
        _.dropRightWhile([1, 2, 3], function (n) {
          return n > 1
        })
          .should.eql([1])
      })

      var users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
      ]
      it('_.dropRightWhile(users, \'active\')', function () {
        _.dropRightWhile(users, 'active')
          .should.eql(users)
      })

      var objects = [
          {'a': {'b': {'c': false } } },
          {'a': {'b': {'c': 1 } } }
        ]
      it('_.dropRightWhile(objects, [\'a\', \'b\', \'c\'])', function () {
        _.dropRightWhile(objects, ['a', 'b', 'c'])
          .should.eql([objects[0]])
      })
    })
  })
})
