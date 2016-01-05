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
})