exports.after = function (n, func) {
  var count = 0;
  return function () {
    count++;

    if (count >= n) {
      func()
    }
  }
}