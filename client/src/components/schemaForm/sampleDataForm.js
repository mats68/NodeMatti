import * as data from './sampleDataSchema'
import * as Const from './constants'

data.schema[Const.ui] = data.schemaUi
data.schema.fields.adresse.type[Const.ui] = data.adressUi
data.implementedSchema[Const.ui] = data.implementedSchemaUi
//data.implementedSchema2[Const.ui] = data.implementedSchema2Ui
data.tabShema[Const.ui] = data.tabShemaUi
data.tabShema.fields.adresse.type[Const.ui] = data.adressUi

/*export const formSchema = {
  implements: [data.implementedSchema],
  schema: data.schema

}
*/
export const formSchema = {
  schema: data.tabShema
}


