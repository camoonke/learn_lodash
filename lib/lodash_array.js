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
  for(var i=_arr.length-1; i>=0; --i) {
    if(typeof predicate === 'function') {
      if(predicate(_arr[i]) !== false) _arr.pop()
      else return _arr
    }

    // using the `_.property` callback shorthand
    if(typeof predicate === 'string' && typeof thisArg === 'undefined') {
      if(_arr[i][predicate] !== false) _arr.pop()
      else return _arr
    }
    if(Array.isArray(predicate) && typeof thisArg === 'undefined') {
      var _obj = {}
      Object.assign(_obj, _arr[i])
      predicate.forEach(function (k) {
        _obj = _obj[k]
      })
      if(_obj !== false) _arr.pop()
      else return _arr
    }

    // these two to do.
    // using the `_.matches` callback shorthand
    // using the `_.matchesProperty` callback shorthand
  }
  return _arr
}