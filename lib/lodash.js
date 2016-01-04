'use strict';

var Lodash = {
  // Array
  chunk: function (arr, size) {
    var size = isNaN(size * 1) ? 1 : size * 1
    var _arr = []
    for(var i=0, iLength=arr.length; i<iLength; i+=size) {
      _arr.push(arr.slice(i, i+size))
    }
    return _arr
  }
}

module.exports = Lodash