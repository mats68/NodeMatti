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
  },
  bemerkung1: 'wichtige Bemerkung: mache das',
  bemerkung2: ''
}

export const adress = {
  fields: {
    strasse: {
      type: "text"
    },
    plz: {
      type: "text"
    },
    ort: {
      type: "text"
    }
  }
}

export const schema = {
  fields: {
    name: {
      type: "text"
    },
    vorname: {
      type: "text"
    },
    email: {
      type: "text"
    },
    tel: {
      type: "text"
    },
    adresse: {
      type: adress
    }
  }
}

export const schemaUi = {
  fields: {
    name: {
      label: "Name",
      rows: "3"
    },
    vorname: {
      label: "Vorname",
      rows: "4",
      min: 1,
      max: 100
    },
    _container: {
      options: {
        type: "panel",
        label: "Kontakt-Info",
        showHeader: true
      },
      fields: {
        email: {
          label: "Email"
        },
        tel: {
          label: "Telefon"
        }
      }
    }
  }
}

export const implementedSchema = {
  fields: {
    zusatz1: {
      type: "text"
    },
    zusatz2: {
      type: "text"
    },
    nummer: {
      type: "number"
    }
  }
}

export const implementedSchemaUi = {
  fields: {
    zusatz1: {
      label: "Zusatz1"
    },
    zusatz2: {
      label: "Zusatz2"
    }
  }
}


export const adressUi = {
  fields: {
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
}



