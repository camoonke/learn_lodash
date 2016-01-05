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
})