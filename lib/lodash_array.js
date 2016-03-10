var tools = require('./tools')

// not complete: _.intersection, _.intersectionBy, _.intersectionWith

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

exports.concat = function (array) {
  var arr 
  if(!Array.isArray(array)) arr = [array]
  else arr = array.slice()

  var _arr = tools.slice(arguments, 1, arguments.length)
  _arr.forEach(function (e) {
    if(Array.isArray(e)) arr = arr.concat(e)
    else arr.push(e)
  })
  return arr
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
  if(tools.notExist(num)) num = 1
  return arr.slice(num, arr.length)
}

exports.dropRight = function (arr, num) {
  if(tools.notExist(num)) num = 1
  if(!num) return arr
  return arr.slice(0, -num)
}

exports.dropRightWhile = function (arr, predicate, thisArg) {
  if(!arr || !arr.length) return []
  var _arr = arr.slice()

  var newPredicate;

  if (typeof predicate === 'function') {
    newPredicate = predicate
  } else if (typeof predicate === 'string' && tools.notExist(thisArg)) {
    newPredicate = function (item) {
      return item[predicate]
    }
  } else if (Array.isArray(predicate) && tools.notExist(thisArg)) {
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

module.exports.fill = function (array, value, start, end) {
  var len = array ? array.length : 0
  if(!len) {
    return []
  }
  if(tools.notExist(start) || typeof start != 'number') {
    start = 0
  }
  if(tools.notExist(end) || typeof end != 'number') {
    end = len
  }
  var arr = []
  for(var i=0, iLength=array.length; i<iLength; ++i) {
    if(i >= start && i < end) {
      arr.push(value)
    } else {
      arr.push(array[i])
    }
  }
  return arr
}

module.exports.findIndex = function (arr, predicate, thisArg) {
  if(!arr || !arr.length) return []
  var _arr = arr.slice()

  var newPredicate;

  if (typeof predicate === 'function') {
    newPredicate = predicate
  } else if (typeof predicate === 'string' && tools.notExist(thisArg)) {
    newPredicate = function (item) {
      return item[predicate]
    }
  } else if (Array.isArray(predicate) && tools.notExist(thisArg)) {
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
    if (newPredicate(_arr[i]) === true) { 
      return i;
    }
  }

  return -1;
}

module.exports.flatten = function (array) {
  var arr = []
  array.forEach(function (e) {
    if(Array.isArray(e)) {
      e.forEach(function (el) {
        arr.push(el)
      })
    } else {
      arr.push(e)
    }
  })
  return arr
}

module.exports.flattenDeep = function (array) {
  var arr = []
  function recursive(e) {
    if(Array.isArray(e)) {
      e.forEach(function (el) {
        recursive(el)
      })
    } else {
      arr.push(e)
    }
  }

  recursive(array)
  return arr
}

module.exports.fromPairs = function (array) {
  if(!array.length) return {}

  var obj = {}
  for(var i=0, iLength=array.length; i<iLength; ++i) {
    var keyValue = array[i]
    var key = keyValue.length ? keyValue[0] : void 0
    var value = keyValue.length > 1 ? keyValue[1] : void 0
    obj[key] = value
  }

  return obj
}

module.exports.head = function (array) {
  if(!Array.isArray(array) || !array.length) return void 0
  return array[0]
}

module.exports.indexOf = function (array, value, fromIndex) {
  if(!Array.isArray(array)) return -1
  return array.indexOf(value, fromIndex)
}

module.exports.initial = function (array) {
  var length = array.length
  if(!Array.isArray(array) || !length) return []

  var arr = []
  length--
  array.forEach(function (e, i) {
    if(i != length) {
      arr.push(e)
    }
  })
  return arr
}

module.exports.join = function (arr, split) {
  return arr.join(split ? split : ',')
}
