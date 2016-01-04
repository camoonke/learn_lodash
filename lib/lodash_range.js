exports.inRange = function (n, start, end) {
  if (end === void 0) {
    end = start;
    start = 0;
  }

  return n >= start && n < end
}

exports.random = function (min, max) {
  if (max === void 0) {
    max = min;
    min = 0;
  }

  var diff = max - min;

  var randomDiff = Math.random() * diff
  randomDiff = Math.round(randomDiff)

  return randomDiff + min;
}