exports.chunk = function (arr, size) {
  size = Number(size)

  size = isNaN(size) ? 1 : size
  var _arr = []
  for (var i = 0, iLength = arr.length; i < iLength; i += size) {
    _arr.push(arr.slice(i, i + size))
  }
  return _arr
}

exports.compact = function (arr) {
  return arr.filter(function (val) {
    return !!val;
  })
}

exports.difference = function () {
  var arr = Array.prototype.slice.call(arguments)
  var des = arr.shift()
  if(!des) return []
  if(!arr.length) return des
  arr = arr.reduce(function (a, b) {
    return a.concat(b)
  })
  return des.filter(function (val) {
    return arr.indexOf(val) === -1
  })
}

exports.drop = function (arr, num) {
  if(num === undefined) num = 1
  return arr.slice(num, arr.length)
}

exports.dropRight = function (arr, num) {
  if(num === undefined) num = 1
  if(!num) return arr
  return arr.slice(0, -num)
}

exports.dropRightWhile = function (arr, predicate, thisArg) {
  if(!arr || !arr.length) return []
  var _arr = arr.slice()

  var newPredicate;

  if (typeof predicate === 'function') {
    newPredicate = predicate
  } else if (typeof predicate === 'string' && typeof thisArg === 'undefined') {
    newPredicate = function (item) {
      return item[predicate]
    }
  } else if (Array.isArray(predicate) && typeof thisArg === 'undefined') {
    newPredicate = function (item) {
      for (var i = 0; i < predicate.length; i++) {
        var key = predicate[i];
        if (item && item[key]) {
          item = item[key]
        } else {
          return false;
        }
      }

      return item;
    }
  }

  for (var i = _arr.length - 1; i >= 0; i--) {
    if (newPredicate(_arr[i]) !== false) {
      _arr.pop()
    } else {
      return _arr
    }
  }

  return _arr;
}