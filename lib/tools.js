exports.slice = function (obj, start, end) {
  return Array.prototype.slice.call(obj, start, end);
}

exports.exist = function (item) {
  return typeof item !== "undefined" && item !== null;
}