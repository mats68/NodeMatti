/*todo check names:
The field name _id is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.
The field names cannot start with the dollar sign ($) character.
The field names cannot contain the dot (.) character.
The field names cannot contain the null character.

*/

const newSchema = {
  name: {
    type: "string"
  },
  vorname: {
    type: "string"
  },
  _ui: {
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


export { newSchema, dataFilled, schema, schema2, uischema, uischema2 }