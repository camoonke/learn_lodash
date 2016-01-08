var lodash = function () {

}

var functionArr = [
  require('./lib/lodash_array'),
  require('./lib/lodash_function'),
  require('./lib/lodash_date'),
  require('./lib/lodash_range')
]

for (var i = 0; i < functionArr.length; i++) {
  for (var functionName in functionArr[i]) {
    lodash[functionName] = functionArr[i][functionName]
  }
}

lodash.isLearnLodash = true; // 通过这个变量来判断是否自身。_.bindKey 中会使用自身作为占位符

exports = module.exports = lodash;