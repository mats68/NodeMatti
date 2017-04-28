export function mergeRecursive() {

  // _mergeRecursive does the actual job with two arguments.
  var _mergeRecursive = function (dst, src) {
    if (typeof src !== 'object' || src === null) {
      return dst;
    }

    for (var p in src) {
      if (!src.hasOwnProperty(p))
        continue;
      if (src[p] === undefined)
        continue;
      if ( typeof src[p] !== 'object' || src[p] === null) {
        dst[p] = src[p];
      } else if (typeof dst[p]!=='object' || dst[p] === null) {
        dst[p] = _mergeRecursive(src[p].constructor===Array ? [] : {}, src[p]);
      } else {
        _mergeRecursive(dst[p], src[p]);
      }
    }
    return dst;
  }

  // Loop through arguments and merge them into the first argument.
  var out = arguments[0];
  if (typeof out !== 'object' || out === null)
    return out;
  for (var i = 1, il = arguments.length; i < il; i++) {
    _mergeRecursive(out, arguments[i]);
  }
  return out;
}
