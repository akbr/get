var makePath = require("@akbr/make-path");

module.exports = function get(obj, path, fallback) {
  if (typeof(obj) !== "object" || obj === null) {
    return obj;
  }

  if (typeof(path) === "function") {
    return path(obj, get);
  } else {
    path = makePath(path);
  }

  var length = path.length;
  for (var i = 0; i < length; i++) {
    obj = obj[path[i]];
    if (!obj) {
      if (i !== length - 1) {
        // Normally, an exception would be thrown.
        return fallback !== undefined ? fallback: null;
      } else {
        break;
      }
    }
  }

  return obj;
};