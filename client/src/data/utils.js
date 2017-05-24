const utils = {
  mergeRecursive: function () {

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
        if (typeof src[p] !== 'object' || src[p] === null) {
          dst[p] = src[p];
        } else if (typeof dst[p] !== 'object' || dst[p] === null) {
          dst[p] = _mergeRecursive(src[p].constructor === Array ? [] : {}, src[p]);
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
  },

  setValueFromDottedKey: function (key, data, value) {
    let k = key.split('.')
    let obj = data
    for (let i = 0; i < (k.length - 1); i++) {
      obj = obj[k[i]] || {}
    }
    obj[k[k.length - 1]] = value

  },

  getValueFromDottedKey: function (key, data) {
    let k = key.split('.')
    let obj = data
    for (let i = 0; i < (k.length - 1); i++) {
      obj = obj[k[i]] || {}
    }
    return obj[k[k.length - 1]]

  },

  getColumnWidths: function (colsArray) {
    // Max container width	None (auto)	540px	720px	960px	1140px
    // Class prefix	.col-	.col-sm-	.col-md-	.col-lg-	.col-xl-
    const check = (ind, suff) => {
      return colsArray && colsArray.length > ind ? `col-${suff}-${colsArray[ind]} ` : `col-${suff}-12 `
    }
    let res = check(0, 'xl')
    res += check(1, 'lg')
    res += check(2, 'md')
    res += check(3, 'sm')
    return res
  },

  getItemFromSchema(item, schema) {
    if (schema.containers[item]) {
      return schema.containers[item]
    } else {
      return schema.fields[item]
    }
  },

  getParentItemFromSchema(item, schema) {
    let res
    Object.keys(schema.containers).forEach((name) => {
      if (schema.containers[name].fields.indexOf(item) !== -1) {
        return res = schema.containers[name]
      }
    })
    return res
  },

  isContainer(item) {
    return (item.type === "form" || item.type === "panel" || item.type === "tabControl" || item.type === "tab")
  }
}



export default utils