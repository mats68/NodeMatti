/*todo check names:
The field name _id is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.
The field names cannot start with the dollar sign ($) character.
The field names cannot contain the dot (.) character.
The field names cannot contain the null character.

*/
const dataEmpty = {
  _id: '',
  name: '',
  vorname: '',
}



const dataFilled = {
  _id: '100',
  name: 'Thaler',
  vorname: 'Fritz',
  Adresse: {
    Strasse: 'hofegg',
    PLZ: '9202',
    Ort: 'Gossau'
  }
}


const subschemaAdress = {
  Strasse: {
    type: "string"
  },
  PLZ: {
    type: "string"
  },
  Ort: {
    type: "string"
  }
}

const uisubschemaAdress = {
  Strasse: {
    label: "Strasse"
  },
  PLZ: {
    label: "PLZ"
  },
  Ort: {
    label: "Ort"
  }
}

const schema = {
  _id: {
    type: "string"
  },
  name: {
    type: "string"
  },
  vorname: {
    type: "string"
  },
  Adresse:
  {
    type: subschemaAdress,
    uischema: {
      Strasse: {
        label: "Strasse"
      },
      PLZ: {
        label: "PLZ"
      },
      Ort: {
        label: "Ort"
      }
    }
  }
}

const uischema = {
  _id: {
    label: "Id",
    rows: "2"
  },
  name: {
    label: "Name",
    rows: "3"
  },
  vorname: {
    label: "Vorname",
    rows: "4",
    min: 1,
    max: 100
  }
}

const schema2 = {
  todo: {
    type: "string"
  },
  age: {
    type: "number"
  }
}

const uischema2 = {
  todo: {
    label: "Todo"
  },
  age: {
    label: "Age"
  }
}



//let merged = Object.assign(schema,uischema)

/*function mergeRecursive() {

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
*/
// let merged = mergeRecursive({},schema,uischema)
//let merged = Object.assign({},schema,uischema)

// console.log('schema',schema)
// console.log('uischema',uischema)
// console.log('merged',merged)


export { dataEmpty, dataFilled, schema, schema2, uischema, uischema2 }