var lodash = function () {

}

var functionArr = [
  require('./lib/lodash_array'),
  require('./lib/lodash_function'),
  require('./lib/lodash_date')
]

for (var i = 0; i < functionArr.length; i++) {
  for (var functionName in functionArr[i]) {
    lodash[functionName] = functionArr[i][functionName]
  }
}

exports = module.exports = lodash;