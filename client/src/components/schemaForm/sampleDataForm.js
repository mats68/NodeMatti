import * as data from './sampleDataSchema'
import * as Const from './Constants'

data.schema[Const.ui] = data.schemaUi
data.schema.adresse.type[Const.ui] = data.adressUi
data.implementedSchema[Const.ui] = data.implementedSchemaUi
data.implementedSchema2[Const.ui] = data.implementedSchema2Ui

export const formSchema = {
  implements: [data.implementedSchema,data.implementedSchema2],
  schema: data.schema

}



