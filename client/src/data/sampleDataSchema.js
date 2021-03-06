/*todo check names:
invalid names in mongo
The field name _id is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.
The field names cannot start with the dollar sign ($) character.
The field names cannot contain the dot (.) character.
The field names cannot contain the null character.
*/

export const neuSchema = {
  schema: {
    fields: {
      name: {
        type: "text"
      },
      plz: {
        type: "text"
      },
      ort: {
        type: "text"
      },
      ftab1: {
        type: "text"
      },
      ftab2: {
        type: "text"
      },
      hund: {
        type: "text"
      },
      keinContainer: {
        type: "text"
      }

    }
  },
  UIschema: {
    containers: {
      "form": {
        label: "Kunden",
        type: "form",
        fields: ["name", "tabControl1"]
      },
      "panel1": {
        label: "Panel",
        type: "panel",
        fields: ["plz", "ort"]
      },
      "tabControl1": {
        type: "tabControl",
        fields: ["tab1", "tab2"]
      },
      "tab1": {
        type: "tab",
        label: "Tab 1",
        fields: ["ftab1", "panel1"]
      },
      "tab2": {
        type: "tab",
        label: "Tab 2",
        fields: ["ftab2"]
      }

    },
    fields: {
      name: {
        label: "Name"
      },
      plz: {
        label: "PLZ"
      },
      ort: {
        label: "Ort"
      },
      ftab1: {
        label: "auf Tab 1"
      },
      ftab2: {
        label: "auf Tab 2"
      },
      keinContainer: {
        label: "Kein Container"
      }

    }
  }
}


export const dataFilled = {
  _id: '100',
  name: 'Thaler',
  vorname: 'Fritz',
  adresse: {
    strasse: 'hofegg',
    plz: '9202',
    ort: 'Gossau'
  },
  bem1: 'wichtige Bemerkung: mache das',
  bem2: ''
}


export const zusatz = {
  fields: {
    email: {
      type: "text"
    }
  }
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
    },
    zusatzAngaben:
    {
      type: zusatz
    }
  }
}
//Alle Felder müssen im gleichen UI sein wegen Tree-Struktur
//Subschemas: ui innerhalb container; felder können nicht verschoben werden
//Subschemas und implements können keine Subschemas ihrerseits haben (Rekursion möglich)
export const zusatzUi = {
  fields: {
    email: {
      label: "Email"
    },
    telefon: {
      label: "Telefon"
    }
  }
}

export const adressUi = {
  fields: {
    strasse: {
      label: "Strasse",
      pos: 1,
      //cols: [6,6,6,6]
    },
    plz: {
      label: "PLZ",
      pos: 2,
    },
    ort: {
      label: "Ort",
      pos: 3,
    },
    zusatzAngaben: {
      type: "_container",
      label: "Zuastzangaben",
      containertype: "subschema",
      pos: 4,
      fields: zusatzUi.fields
    }
  }
}


/*

export const tabShema = {
  fields: {
    klein1: {
      type: "text"
    },
    klein2: {
      type: "text"
    },
    klein3: {
      type: "text"
    },
    klein4: {
      type: "text"
    },
    name: {
      type: "text"
    },
    vorname: {
      type: "text"
    },
    strasse: {
      type: "text"
    },
    adresse: {
      type: adress
    },
  }
}


export const tabShemaUi = {
  fields: {
    klein1: {
      label: "klein1",
      pos: 1
    },
    klein2: {
      label: "klein2",
      pos: 2
    },
    klein3: {
      label: "klein3",
      pos: 3
    },
    klein4: {
      label: "klein4",
      pos: 4
    },
    tab: {
      type: "_container",
      pos: 5,
      options: {
        type: "tab",
      },
      fields: {
        tab1: {
          type: "_container",
          pos: 6,
          options: {
            type: "tabPanel",
            title: "Tab 1"
          },
          fields: {
            name: {
              label: "Name",
              pos: 7
            },
            vorname: {
              label: "Vorname",
              pos: 8
            }
          }
        },
        tab2: {
          type: "_container",
          pos: 9,
          options: {
            type: "tabPanel",
            title: "Tab 2"
          },
          fields: {
            strasse: {
              label: "Strasse",
              pos: 10
            }
          }
        }
      }
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
    },
    bem1: {
      type: "text"

    },
    bem2: {
      type: "text"

    }
  }
}

export const schemaUi = {
  fields: {
    name: {
      label: "Name",
      cols: [4]
    },
    vorname: {
      label: "Vorname",
      cols: [4],
      min: 1,
      max: 100
    },
    _container: {
      options: {
        type: "panel",
        cols: [4],
        headerText: "Kontakt-Info",
        showHeader: true,
        footerText: "Fusstext",
        showFooter: false
      },
      fields: {
        email: {
          label: "Email",
          cols: [6]
        },
        tel: {
          label: "Telefon",
          cols: [6]
        },
        _container: {
          options: {
            type: "tab",
            cols: [12]
          },
          fields: {
            _container: {
              options: {
                type: "tabPanel"
              },
              fields: {
                bem1: {
                  label: "Bamerkung1"
                }
              }
            }
          }
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
    },
    nummer: {
      label: "Nummer",
      cols: [2, 3, 4, 5]
    }
  }
}


export const adressUi = {

  fields: {
    tab: {
      type: '_container',
      pos: 100,
      options: {
        type: "panel",
        cols: [4],
        headerText: "Kontakt-Info",
        showHeader: true,
        footerText: "Fusstext",
        showFooter: false
      },
      fields: {
        strasse: {
          label: "Strasse",
          pos: 101
        },
        plz: {
          label: "PLZ",
          pos: 102,
          cols: [5, 3, 4, 5]
        },
        ort: {
          label: "Ort",
          pos: 103,
          cols: [10, 9, 8, 7]
        }
      }
    }
  }
}
*/
