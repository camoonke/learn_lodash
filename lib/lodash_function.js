var tools = require('./tools')

exports.after = function (n, func) {
  var count = 0;
  return function () {
    count++;

    if (count >= n) {
      return func()
    }
  }
}

exports.ary = function (func, n) {
  if (n === void 0) {
    n = func.length
  }

  return function () {
    return func.apply(func, [].slice.call(arguments, 0, n));
  }
}

exports.before = function (n, func) {
  var count = 0;
  return function () {
    count++;

    if (count < n) {
      return func()
    }
  }
}

exports.bind = function (func, thisArg, partials) {
  if (partials === void 0) {
    partials = [];
  } else {
    partials = [].slice.call(arguments, 2);
  }

  return function () {
    var args = [].slice.call(arguments)
    return func.apply(thisArg, partials.concat(args))
  }
}

exports.bindAll = function (obj, methods) {
  var bindMethods = [];

  if (methods) {
    bindMethods = methods
  } else {
    for (var method in obj) {
      if (typeof obj[method] == 'function') {
        bindMethods.push(method)
      }
    }
  }

  bindMethods.forEach(function (method) {
    obj[method] = obj[method].bind(obj)
  })

  return obj;
}

exports.bindKey = function (object, key, partials) {
  var outerArgs = tools.toArray(arguments).slice(2);

  return function () {
    var args = [];
    var innerArgs = tools.toArray(arguments)

    outerArgs.forEach(function (arg) {
      if (arg.isLearnLodash) {
        args.push(innerArgs.shift())
      } else {
        args.push(arg)
      }
    })

    args = args.concat(innerArgs)

    console.log('args', args)

    return object[key].apply(object, args)
  }
}