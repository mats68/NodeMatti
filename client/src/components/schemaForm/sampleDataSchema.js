/*todo check names:
invalid names in mongo
The field name _id is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.
The field names cannot start with the dollar sign ($) character.
The field names cannot contain the dot (.) character.
The field names cannot contain the null character.
*/


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

