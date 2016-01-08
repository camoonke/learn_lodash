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

