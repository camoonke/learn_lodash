var tools = require('./tools')

exports.inRange = function (n, start, end) {
  if (tools.notExist(end)) {
    end = start;
    start = 0;
  }

  return n >= start && n < end
}

exports.random = function (min, max) {
  if (tools.notExist(max)) {
    max = min;
    min = 0;
  }

  var diff = max - min;

  var randomDiff = Math.random() * diff
  randomDiff = Math.round(randomDiff)

  return randomDiff + min;
}