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