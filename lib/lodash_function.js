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
  if (tools.notExist(n)) {
    n = func.length
  }

  return function () {
    return func.apply(func, tools.slice(arguments, 0, n));
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
  if (tools.notExist(partials)) {
    partials = [];
  } else {
    partials = tools.slice(arguments, 2);
  }

  return function () {
    var args = tools.slice(arguments)
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
  var outerArgs = tools.slice(arguments, 2);

  return function () {
    var args = [];
    var innerArgs = tools.slice(arguments)

    outerArgs.forEach(function (arg) {
      if (arg.isLearnLodash) {
        args.push(innerArgs.shift())
      } else {
        args.push(arg)
      }
    })

    args = args.concat(innerArgs)

    return object[key].apply(object, args)
  }
}

exports.curry = function (func, arity) {
  if (tools.notExist(arity)) {
    arity = func.length
  }


  function innerFunc(_args) {
    return function () {
      var args = _args || [];
      var hasPlaceHolder = false;

      var innerArgs = tools.slice(arguments);

      innerArgs.forEach(function (arg) {
        if (arg.isLearnLodash) {
          hasPlaceHolder = true;
        }
      })

      args.forEach(function (arg, idx) {
        if (arg.isLearnLodash) {
          args[idx] = innerArgs.shift()
        }
      })

      args = args.concat(innerArgs)

      if (args.length === arity && !hasPlaceHolder) {
        return func.apply(null, args);
      } else {
        return innerFunc(args)
      }
    }
  }

  return innerFunc()
}

exports.curryRight = function (func, arity) {
  if (tools.notExist(arity)) {
    arity = func.length
  }


  function innerFunc(_args) {
    return function () {
      var args = _args || [];
      var hasPlaceHolder = false;

      var innerArgs = tools.slice(arguments);

      innerArgs.forEach(function (arg) {
        if (arg.isLearnLodash) {
          hasPlaceHolder = true;
        }
      })

      args.forEach(function (arg, idx) {
        if (arg.isLearnLodash) {
          args[idx] = innerArgs.shift()
        }
      })

      args = innerArgs.concat(args)

      if (args.length === arity && !hasPlaceHolder) {
        return func.apply(null, args);
      } else {
        return innerFunc(args)
      }
    }
  }

  return innerFunc()
}

exports.debounce = function (func, wait) {
  if (tools.notExist(wait)) {
    wait = 0;
  }

  var timer;
  function _debounce() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, wait)
  }

  _debounce.cancel = function () {
    clearTimeout(timer)
  }

  return _debounce
}

exports.defer = function (func) {
  var args = tools.slice(arguments, 1)
  setTimeout(function () {
    func.apply(null, args);
  }, 0)
}

exports.delay = function (func, wait) {
  var args = tools.slice(arguments, 2)

  setTimeout(function () {
    func.apply(null, args);
  }, wait)
}

exports.flow = function () {
  var funcs = tools.slice(arguments);

  function createdFn() {
    var result = arguments;

    for (var i = 0; i < funcs.length; i++) {
      result = [funcs[i].apply(createdFn, result)]
    }

    return result[0];
  }

  return createdFn
}

exports.flowRight = function () {
  var funcs = tools.slice(arguments).reverse();

  function createdFn() {
    var result = arguments;

    for (var i = 0; i < funcs.length; i++) {
      result = [funcs[i].apply(createdFn, result)]
    }

    return result[0];
  }

  return createdFn
}

exports.memoize = function (func, resolver) {

  resolver = resolver || function (str) {
    return String(str);
  }

  function Memoize() {
    var args = tools.slice(arguments);

    var cacheKey = resolver.apply(null, args);

    if (Memoize.cache[cacheKey]) {
      return Memoize.cache[cacheKey]
    }

    var result = Memoize.fn.apply(Memoize, args);

    Memoize.cache[cacheKey] = result

    return result
  }

  Memoize.cache = {}
  Memoize.fn = func

  return Memoize
}
