exports.slice = function (obj, start, end) {
  return Array.prototype.slice.call(obj, start, end);
}

exports.notExist = function (item) {
  return typeof item === "undefined" || item === null;
}