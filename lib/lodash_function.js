exports.after = function (n, func) {
  var count = 0;
  return function () {
    count++;

    if (count >= n) {
      func()
    }
  }
}

exports.ary = function (func, n) {
  if (n === void 0) {
    n = func.length
  }

  return function () {
    return func.apply(func, [].slice.call(arguments, 0, n));
  }
}

exports.before = function (n, func) {
  var count = 0;
  return function () {
    count++;

    if (count < n) {
      func()
    }
  }
}