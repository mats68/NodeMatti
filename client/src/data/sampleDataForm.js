import * as data from './sampleDataSchema'
import {cn} from '../imports'

// data.schema[cn.ui] = data.schemaUi
// data.schema.fields.adresse.type[cn.ui] = data.adressUi
// data.implementedSchema[cn.ui] = data.implementedSchemaUi
//data.implementedSchema2[cn.ui] = data.implementedSchema2Ui
// data.tabShema[cn.ui] = data.tabShemaUi
// data.tabShema.fields.adresse.type[cn.ui] = data.adressUi
data.adress._ui = data.adressUi
export const formSchema = {
  schema: data.adress
}




