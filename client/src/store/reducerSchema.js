import undoable, { excludeAction } from 'redux-undo'
import { cn, utils } from 'imports'
//import merge from 'lodash/merge'
import { neuSchema } from '../data/sampleDataSchema'


//todo save ui of subschema in general ui

const initialState = {
  formSchema: neuSchema,
}

/*let UIFieldInfo = {
  uiField: {},
  uiFieldId: '',
  uiParentSchema: {},
  uiParentSchemaId: {},
  fieldId: '',
  schema: {},
  uiSchema: {}
}
*/

// function iterateUiSchemaRecursive(UIschema, parentSchema, parentId, schema, fun, args) {
//   Object.keys(UIschema.fields).forEach(name => {
//     let fi = {}
//     fi.uiField = UIschema.fields[name]
//     fi.uiFieldId = name
//     fi.uiParentSchema = parentSchema
//     fi.uiParentSchemaId = parentId
//     fi.schema = schema
//     fi.uiSchema = UIschema

//     fun(fi, ...args)
//     if (UIschema.fields[name].type === cn.container) {
//       iterateUiSchemaRecursive(UIschema.fields[name], parentSchema, name, schema, fun, args)
//     }
//   })
// }

// function iterateSchemaRecursive(schema, uischema, fun, args, execFunOnUISchema = true, parentId = '') {
//   Object.keys(schema.fields).forEach(name => {
//     if (typeof schema.fields[name].type === 'object') {
//       console.log('uischema[name]', uischema, name)
//       iterateSchemaRecursive(schema.fields[name].type, uischema.fields[name], fun, args, execFunOnUISchema, name)
//     } else {
//       if (!execFunOnUISchema) {
//         let fi = {}
//         fi.schema = schema
//         fi.uiSchema = uischema
//         fi.fieldId = name
//         fi.parentId = parentId
//         fun(fi, ...args)
//       }
//     }
//   })
//   if (execFunOnUISchema) {
//     iterateUiSchemaRecursive(uischema, {}, '', schema, fun, args)
//   }
// }

// function updatePosMal10(fInf, itemInfo) {
//   fInf.uiField.pos *= 10
//   if (fInf.uiFieldId === itemInfo.targetItemId) {
//     itemInfo.targetItem = fInf.uiField
//     itemInfo.targetItemParent = fInf.uiParentSchema
//     itemInfo.targetItemParentName = fInf.uiParentSchemaId
//   } else if (fInf.uiFieldId === itemInfo.sourceItemId) {
//     itemInfo.sourceItem = fInf.uiField
//     itemInfo.sourceItemParent = fInf.uiParentSchema
//     itemInfo.sourceItemParentName = fInf.uiParentSchemaId
//   }
// }

// function fillArry(fInf, arr) {
//   arr.push(fInf.uiField)
// }

// function changePos(fInf, itemInfo, dropBefore) {
//   if (fInf.uiFieldId === itemInfo.sourceItemId) {
//     if (dropBefore) {
//       fInf.uiField.pos = itemInfo.targetItem.pos - 1
//     } else {
//       fInf.uiField.pos = itemInfo.targetItem.pos + 1
//     }
//   }
// }

// function getHighPos(fInf, newitem) {
//   if (fInf.uiField.pos > newitem.pos) {
//     newitem.pos = fInf.uiField.pos
//   }
// }


// function checkUIField(fInf, UIFields, uiSchema, pos) {
//   //todo if not schema.inherits...
//   let name = fInf.parentId ? fInf.parentId + '.' + fInf.fieldId : fInf.fieldId
//   let v = utils.getValueFromDottedKey(name, UIFields)
//   if (!v) {
//     uiSchema[name] = { label: name, pos }
//     pos++
//   }
// }

function checkSchema(formSchema) {
  if (!formSchema.schema) {
    formSchema.schema = {}
  }
  if (!formSchema.schema.fields) {
    formSchema.schema.fields = {}
  }
  if (!formSchema.UIschema) {
    formSchema.UIschema = {}
  }
  if (!formSchema.UIschema.containers) {
    formSchema.UIschema.containers = {}
  }
  if (!formSchema.UIschema.containers.form) {
    formSchema.UIschema.containers.form = {type: "form", fields: []}
  }

  if (!formSchema.UIschema.fields) {
    formSchema.UIschema.fields = {}
  }
}


function addNewItem(newState, data) {
  //todo test name vorhanden
  checkSchema(newState.formSchema)
  let schema = newState.formSchema.schema
  let uischema = newState.formSchema.UIschema
  let newSchemaItem = { type: "text" }
  let newUiSchemaItem = { label: data.label }
  schema.fields[data.id] = newSchemaItem
  uischema.fields[data.id] = newUiSchemaItem
  uischema.containers.form.fields.push(data.id)
}

function repairSchema(newState) {
  checkSchema(newState.formSchema)
  let schema = newState.formSchema.schema
  let uischema = newState.formSchema.UIschema
  //add missing fields form schema to formschema and container
  let item, pitem
  Object.keys(schema.fields).forEach((name) => {
    item = utils.getItemFromSchema(name, uischema)
    if (!item) {
      uischema.fields[name] = {label: name}
    }
    pitem = utils.getParentItemFromSchema(name, uischema)
    if (!pitem) {
      uischema.containers.form.fields.push(name)
    }



  })

  // let item = { pos: 0 }
  // iterateSchemaRecursive(schema, uischema, getHighPos, [item.pos])
  // item.pos++
  // //let tempSchema = utils.mergeRecursive({}, schema)
  // let UIFields = []
  // iterateSchemaRecursive(schema, uischema, fillArry, [UIFields])
  // iterateSchemaRecursive(schema, uischema, checkUIField, [UIFields, uischema, item.pos], false)

}

function changePos(newState, data) {
  const { sourceItem, targetItem, dropBefore } = data
  let uischema = newState.formSchema.UIschema
  let ps = utils.getParentItemFromSchema(sourceItem.id, uischema)
  let pt = utils.getParentItemFromSchema(targetItem.id, uischema)
  if (ps && pt) {
    let psi = ps.fields.indexOf(sourceItem.id)
    let pti = pt.fields.indexOf(targetItem.id)
    debugger
    let df = dropBefore
    if (ps === pt && pti === (psi + 1)) { df = false }
    if (ps === pt && pti === (psi - 1)) { df = true }
    let newPos = pti;
    ps.fields.splice(psi, 1)
    if (!df) { newPos++ }
    pt.fields.splice(newPos, 0, sourceItem.id)
  }



  return newState
}

const reducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case cn.SWITCH_POSITION:
      newState = utils.mergeRecursive({}, state)
      return changePos(newState, action.data)
    case cn.ADD_ITEM:
      if (action.data.status === cn.STATUS.ACTION_START) {
        newState = utils.mergeRecursive({}, state)
        addNewItem(newState, action.data.data)
        return newState
      }
      return state
    case cn.ADD_SCHEMA:
      newState = {}
      newState.formSchema = {}
      checkSchema(newState.formSchema)
      newState.formSchema._id = ''
      newState.formSchema.name = ''
      newState.formSchema.collection = ''
      return newState
    case cn.REPAIR_SCHEMA:
      newState = utils.mergeRecursive({}, state)
      repairSchema(newState)
      return newState
    case cn.LOAD_SCHEMA:
      newState = {}
      newState.formSchema = {}
      newState.formSchema = action.data
      return newState
    case cn.SAVE_SCHEMA:
      if (action.data.status === cn.STATUS.ACTION_END) {
        newState = {}
        newState.formSchema = Object.assign({}, state.formSchema, action.data.data)
        newState.formSchema.schema = state.formSchema.schema
        return newState
      }
      return state
    default:
      return state
  }
}


const undoableReducer = undoable(reducer, {
  filter: excludeAction([cn.CHANGE_SELECTED_ITEM, cn.ADD_ITEM_MODAL, cn.CLOSE_ADD_ITEM_MODAL])
})
export default undoableReducer


