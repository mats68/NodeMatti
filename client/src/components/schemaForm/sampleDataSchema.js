/*todo check names:
invalid names in mongo
The field name _id is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.
The field names cannot start with the dollar sign ($) character.
The field names cannot contain the dot (.) character.
The field names cannot contain the null character.

*/

export const dataFilled = {
  _id: '100',
  name: 'Thaler',
  vorname: 'Fritz',
  adresse: {
    strasse: 'hofegg',
    plz: '9202',
    ort: 'Gossau'
  }
}

export const adress = {
  strasse: {
    type: "string"
  },
  plz: {
    type: "string"
  },
  ort: {
    type: "string"
  }
}

export const schema = {
  name: {
    type: "string"
  },
  vorname: {
    type: "string"
  },
  adresse: {
    type: adress
  }
}

export const schemaUi = {
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

export const implementedSchema = {
  zusatz1: {
    type: "string"
  },
  zusatz2: {
    type: "string"
  }
}

export const implementedSchemaUi = {
  zusatz1: {
    label: "Zusatz1"
  },
  zusatz2: {
    label: "Zusatz2"
  }
}

export const implementedSchema2 = {
  bemerkung1: {
    type: "string"
  },
  bemerkung2: {
    type: "string"
  }
}

export const implementedSchema2Ui = {
  bemerkung1: {
    label: "Bemerkung1"
  },
  bemerkung2: {
    label: "Bemerkung2"
  }
}



export const adressUi = {
  strasse: {
    label: "Strasse"
  },
  plz: {
    label: "PLZ"
  },
  ort: {
    label: "Ort"
  }
}



