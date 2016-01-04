
var lodashArray = require('./lib/lodash_array')
var lodashFunction = require('./lib/lodash_function')

var lodash = function () {

}

var functionArr = [lodashArray, lodashFunction]

for (var i = 0; i < functionArr.length; i++) {
  for (var functionName in functionArr[i]) {
    lodash[functionName] = functionArr[i][functionName]
  }
}

exports = module.exports = lodash;