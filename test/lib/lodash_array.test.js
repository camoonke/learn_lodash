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

    describe('#fill', function () {
      it('_.fill([1, 2, 3], \'a\')', function () {
        _.fill([1, 2, 3], 'a')
          .should.eql(['a', 'a', 'a'])
      })

      it('_.fill(Array(3), 2)', function () {
        _.fill(Array(3), 2)
          .should.eql([2, 2, 2])
      })

      it('_.fill([4, 6, 8, 10], \'*\', 1, 3)', function () {
        _.fill([4, 6, 8, 10], '*', 1, 3)
          .should.eql([4, '*', '*', 10])
      })
    })

    describe('#findIndex', function () {
      var users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];

      it('_.findIndex(users, function(o) { return o.user == \'barney\'; })', function () {
        _.findIndex(users, function(o) { return o.user == 'barney'; })
          .should.eql(0)
      })

      it('_.findIndex(users, \'active\')', function () {
        _.findIndex(users, 'active')
          .should.eql(2)
      })
    })

    describe('#flatten', function () {
      it('_.flatten([1, [2, 3, [4]]])', function () {
        _.flatten([1, [2, 3, [4]]])
          .should.eql([1, 2, 3, [4]])
      })
    })

    describe('#flattenDeep', function () {
      it('_.flattenDeep([1, [2, 3, [4]]])', function () {
        _.flattenDeep([1, [2, 3, [4]]])
          .should.eql([1, 2, 3, 4])
      })
    })

    describe('#fromPairs', function () {
      it('_.fromPairs([[\'fred\', 30], [\'barney\', 40]])', function () {
        _.fromPairs([['fred', 30], ['barney', 40]])
          .should.eql({ 'fred': 30, 'barney': 40 })
      })
    })

    describe('#head', function () {
      it('_.head([1, 2, 3])', function () {
        _.head([1, 2, 3])
          .should.eql(1)
      })

      it('_.head([])', function () {
        (_.head([]) === void 0).should.true() 
      })
    })

    describe('#indexOf', function () {
      it('_.indexOf([1, 2, 1, 2], 2)', function () {
        _.indexOf([1, 2, 1, 2], 2)
          .should.eql(1)
      })

      it('_.indexOf([1, 2, 1, 2], 2, 2)', function () {
        _.indexOf([1, 2, 1, 2], 2, 2)
          .should.eql(3)
      })
    })

    describe('#initial', function () {
      it('_.initial([1, 2, 3])', function () {
        _.initial([1, 2, 3])
          .should.eql([1, 2])
      })
    })

    describe('#join', function () {
      it('_.join([1, 2, 3], \'~\')', function () {
        _.join([1, 2, 3], '~')
          .should.eql('1~2~3')
      })

      it('_.join([1, 2, 3])', function () {
        _.join([1, 2, 3])
          .should.eql('1,2,3')
      })
    })

    describe('#last', function () {
      it('_.last([1, 2, 3])', function () {
        _.last([1, 2, 3])
          .should.eql(3)
      })

      it('_.last([])', function () {
        (_.last([]) === void 0).should.true() 
      })
    })

    describe('#lastIndexOf', function () {
      it('_.lastIndexOf([1, 2, 1, 2], 2)', function () {
        _.lastIndexOf([1, 2, 1, 2], 2)
          .should.eql(3)
      })

      it('_.lastIndexOf([1, 2, 1, 2], 2, 2)', function () {
        _.lastIndexOf([1, 2, 1, 2], 2, 2)
          .should.eql(1)
      })

      it('_.lastIndexOf([1, 2, 1, 2])', function () {
        _.lastIndexOf([1, 2, 1, 2])
          .should.eql(-1)
      })
    })

    describe('#pull', function () {
      var array = [1, 2, 3, 1, 2, 3]
      it('_.pull(array, 2, 3)', function () {
        // to do: how to change argument array
        // ((_.pull(array, 2, 3)).toString() === array.toString()).should.true()
        _.pull(array, 2, 3)
          .should.eql([1, 1])
      })
    })

  })
})
