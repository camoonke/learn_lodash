var _ = require('../..')

describe('test/lib/lodash_function.test.js', function () {
  it('#after', function () {
    var count = 0;
    var func = function () {
      count++;
    }

    var wraped = _.after(3, func);

    wraped()
    wraped()

    count.should.eql(0)

    wraped()

    count.should.eql(1)

    wraped();

    count.should.eql(2)
  })

  it('#ary', function () {
    ['6', '8', '10'].map(_.ary(parseInt, 1))
      .should.eql([6, 8, 10]);

    ['6', '8', '10'].map(_.ary(parseInt, 2))
      .should.eql([6, NaN, 2]);

    ['6', '8', '10'].map(_.ary(parseInt))
      .should.eql([6, NaN, 2]);
  })

  it('#before', function () {
    var count = 0;
    var func = function () {
      count++;
    }

    var wraped = _.before(3, func);

    wraped()
    wraped()

    count.should.eql(2)

    wraped()

    count.should.eql(2)

    wraped();

    count.should.eql(2)
  })

  it('#bind', function () {
    var add = function (a, b, c) {
      return a + b + c + this.d
    }

    var obj = {
      d: 1
    }

    var wraped = _.bind(add, obj, 1, 1)

    wraped(1).should.eql(4)
  })

  describe('#bindAll', function () {
    it('should bind all methods', function () {
      var obj = {
        name: 'kate',
        fn1: function () {
          return this.name
        },
        fn2: function () {
          return this.name
        }
      }

      var fn1 = obj.fn1;

      'kate'.should.not.eql(fn1())

      _.bindAll(obj)

      var fn1 = obj.fn1;
      var fn2 = obj.fn2;

      fn1().should.eql('kate')
      fn2().should.eql('kate')

    })

    it('should bind specified methods', function () {
      var obj = {
        name: 'kate',
        fn1: function () {
          return this.name
        },
        fn2: function () {
          return this.name
        }
      }

      _.bindAll(obj, ['fn1'])

      var fn1 = obj.fn1;
      var fn2 = obj.fn2;

      fn1().should.eql('kate')
      'kate'.should.not.eql(fn2())
    })


  })

  it('#bindKey', function () {
    var object = {
      'user': 'fred',
      'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
      }
    };

    var bound = _.bindKey(object, 'greet', 'hi');
    bound('!').should.eql('hi fred!');

    object.greet = function(greeting, punctuation) {
      return greeting + 'ya ' + this.user + punctuation;
    };

    bound('!').should.eql('hiya fred!');

    var bound = _.bindKey(object, 'greet', _, '!');
    bound('hi').should.eql('hiya fred!');
  })

  it('#curry', function () {
    var abc = function(a, b, c) {
      return [a, b, c];
    };

    var curried = _.curry(abc);

    curried(1)(2)(3)
      .should.eql([1, 2, 3])

    curried(1, 2)(3)
      .should.eql([1, 2, 3])

    curried(1, 2, 3).should.eql([1, 2, 3]);

    // using placeholders
    curried(1)(_, 3)(2).should.eql([1, 2, 3]);

  })

  it('#curryRight', function () {
    var abc = function(a, b, c) {
      return [a, b, c];
    };

    var curried = _.curryRight(abc);

    curried(3)(2)(1).should.eql([1, 2, 3])

    curried(2, 3)(1).should.eql([1, 2, 3])

    curried(1, 2, 3).should.eql([1, 2, 3])

    curried(3)(1, _)(2).should.eql([1, 2, 3])
  })

  describe('#debounce', function () {
    it('should only add 1', function (done) {
      var count = 0;
      function add() {
        count++;
      }

      var fn = _.debounce(add, 100);

      fn()
      fn()
      count.should.eql(0)

      setTimeout(function () {
        fn()
      }, 20)

      setTimeout(function () {
        count.should.eql(0)
      }, 110)

      setTimeout(function () {
        count.should.eql(1)
        done()
      }, 150)
    })

    it('should can be canceled', function (done) {
      var count = 0;
      function add() {
        count++;
      }

      var fn = _.debounce(add, 100);

      fn()
      fn()
      fn()
      count.should.eql(0)
      fn.cancel()

      setTimeout(function () {
        count.should.eql(0)
        done()
      }, 150)
    })
  })

  it('#defer', function (done) {
    var count = 0;
    function add(a, b, c) {
      count = count + a + b + c;
    }

    _.defer(add, 1, 1, 1);

    count.should.eql(0)

    setTimeout(function () {
      count.should.eql(3)
      done()
    }, 10)
  })

  it('#delay', function (done) {
    var count = 0;

    var add = function (a) {
      count = count + a
    }

    _.delay(add, 30, 10)

    count.should.eql(0);

    setTimeout(function () {
      count.should.eql(10)
      done()
    }, 50)
  })

  it('#flow', function () {
    function add(a, b) {
      return a + b;
    }

    function square(n) {
      return n * n;
    }

    var addSquare = _.flow(add, square);
    addSquare(1, 2).should.eql(9)
  })

  it('#flowRight', function () {
    function add(a, b) {
      return a + b;
    }

    function square(n) {
      return n * n;
    }

    var addSquare = _.flowRight(square, add);
    addSquare(1, 2).should.eql(9)
  })

  describe('#memoize', function () {
    it('should work', function () {
      var m = _.memoize(function (num) {
        return num + 1;
      })

      m(1).should.eql(2);
      m(1).should.eql(2);

      ('1' in m.cache).should.true()
    })

    it('should work with resolver', function () {
      var m = _.memoize(function (a, b) {
        return a + b;
      }, function (a, b) {
        return a + b;
      })

      m(1, 2).should.eql(3)
      m(1, 2).should.eql(3)
      ;('3' in m.cache).should.true()

    })

    it('should bind to memoized function', function () {
      var m = _.memoize(function (num) {
        return this.base + num
      })

      m.base = 10;

      m(1).should.eql(11)
    })

    it('should fast', function () {
      var fibonacci = _.memoize(function (n) {
        if (n === 0 || n === 1) {
          return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2)
      })

      fibonacci(1000)
    })
  })

  it('#modArgs', function () {
    function doubled(n) {
      return n * 2;
    }

    function square(n) {
      return n * n;
    }

    var modded = _.modArgs(function(x, y) {
      return [x, y];
    }, square, doubled);

    modded(1, 2).should.eql([1, 4]);

    modded(5, 10).should.eql([25, 20]);
  })

  it('#negate', function () {
    function isEven(n) {
      return n % 2 == 0;
    }

    ;[1, 2, 3, 4, 5, 6].filter( _.negate(isEven))
      .should.eql([1, 3, 5]);
  })

  it('#once', function () {
    var count = 0;

    function _add(num) {
      count += num;
    }

    var add = _.once(_add);

    add(5)
    count.should.eql(5);
    add(10)
    count.should.eql(5)

  })
})

