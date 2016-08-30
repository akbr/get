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
    path = getPath(path);
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

function getPath(path) {
  var type;

  if (!path) {
    return [];
  }

  type = typeof(path);

  if (type === 'string') {
    return path.split('.');
  } else if (type === 'number') {
    return [path];
  } else if (Array.isArray(path)) {
    return path;
  } else {
    throw new Error('Invalid path type supplied.');
  }
}