var makePath = require("@akbr/make-path");

module.exports = function get(obj, path) {
  var type, length, i;

  if (!obj) {
    return undefined;
  }

  if (!path) {
    return obj;
  }

  type = typeof(path);

  if (type === 'function') {
    return path(obj, get);
  } else {
    path = makePath(path);
  }

  length = path.length;
  for (i = 0; i < length; i++) {
    obj = obj[path[i]];
    if (!obj) {
      if (i !== length - 1) {
        // Normally, an exception would be thrown.
        // Indicate that by returning null rather than undefined.
        return null;
      } else {
        break;
      }
    }
  }

  return obj;
};