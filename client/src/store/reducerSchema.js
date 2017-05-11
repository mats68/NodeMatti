import undoable, { excludeAction } from 'redux-undo'
import { cn, utils,actions } from '../imports'
import {formSchema} from '../data/sampleDataForm'
//import merge from 'lodash/merge'


//todo save ui of subschema in general ui

const initialState = {
  formSchema: formSchema
}

function iterateUiSchemaRecursive(schema, parentSchema, parentId, fun, args) {
  Object.keys(schema).forEach(name => {
    fun(schema[name], name, parentSchema, parentId, ...args)
    if (schema[name].type === cn.container) {
      iterateUiSchemaRecursive(schema[name][cn.fields], schema, name, fun, args)
    } else {
      //  fun(schema[name], name, parentSchema, parentId, ...args)
    }
  })
}

function iterateSchemaRecursive(schema, uischema, fun, args) {
  Object.keys(schema).forEach(name => {
    if (typeof schema[name].type === 'object') {
      iterateSchemaRecursive(schema[name].type[cn.fields], schema[name].type[cn.ui][cn.fields], fun, args)
    }
  })
  iterateUiSchemaRecursive(uischema, {}, '', fun, args)
}

function updatePosMal10(item, id, parent, parentName, itemInfo) {
  item.pos *= 10
  if (id === itemInfo.targetItemId) {
    itemInfo.targetItem = item
    itemInfo.targetItemParent = parent
    itemInfo.targetItemParentName = parentName
  } else if (id === itemInfo.sourceItemId) {
    itemInfo.sourceItem = item
    itemInfo.sourceItemParent = parent
    itemInfo.sourceItemParentName = parentName
  }
}

function fillArry(item, id, parent, parentName, arr) {
  arr.push(item)
}

function changePos(item, id, parent, parentName, itemInfo, dropBefore) {
  if (id === itemInfo.sourceItemId) {
    if (dropBefore) {
      item.pos = itemInfo.targetItem.pos - 1
    } else {
      item.pos = itemInfo.targetItem.pos + 1
    }
  }
}

function getHighPos(item, id, parent, parentName, newitem) {
  if (item.pos > newitem.pos) {
    newitem.pos = item.pos
  }
}

function addNewItem(newState, data) {
  //todo test name vorhanden
  let schema = newState.formSchema.schema[cn.fields]
  let uischema = newState.formSchema.schema[cn.ui][cn.fields]
  data.pos = 0
  iterateSchemaRecursive(schema, uischema, getHighPos, [data])
  data.pos += 1
  let newSchemaItem = { type: "text" }
  let newUiSchemaItem = { label: data.label, pos: data.pos }
  schema[data.id] = newSchemaItem
  uischema[data.id] = newUiSchemaItem
}




function updateSortPos(newState, data) {
  const { sourceItem, targetItem, dropBefore } = data
  let schema = newState.formSchema.schema[cn.fields]
  let uischema = newState.formSchema.schema[cn.ui][cn.fields]
  //let pos = 1
  let itemInfo = {
    sourceItemId: sourceItem.id,
    sourceItem: {},
    sourceItemParentName: '',
    sourceItemParent: {},
    targetItemId: targetItem.id,
    targetItem: {},
    targetItemParent: {},
    targetItemParentName: {}
  }
  iterateSchemaRecursive(schema, uischema, updatePosMal10, [itemInfo])
  // console.log('itemInfo',itemInfo)
  iterateSchemaRecursive(schema, uischema, changePos, [itemInfo, dropBefore])

  if (itemInfo.sourceItemParentName !== itemInfo.targetItemParentName) {
    if (itemInfo.targetItemParentName === '') {
      uischema[itemInfo.sourceItemId] = itemInfo.sourceItem
    } else {
      itemInfo.targetItemParent[itemInfo.targetItemParentName][cn.fields][itemInfo.sourceItemId] = itemInfo.sourceItem
    }
    if (itemInfo.sourceItemParentName === '') {
      delete uischema[itemInfo.sourceItemId]
    } else {
      delete itemInfo.sourceItemParent[itemInfo.sourceItemParentName][cn.fields][itemInfo.sourceItemId]
    }
  }
  // console.log('uistate',uischema)
  let arr = []
  iterateSchemaRecursive(schema, uischema, fillArry, [arr])
  arr.sort((a, b) => {
    return a.pos - b.pos
  })
  //console.log('arr',arr)
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1
  }


  return newState

}

//todo save ui of subschema in general ui
const reducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case cn.SWITCH_POSITION:
      newState = utils.mergeRecursive({}, state)
      return updateSortPos(newState, action.data)
    case cn.ADD_ITEM:
      newState = utils.mergeRecursive({}, state)
      addNewItem(newState, action.data)
      return newState
    case cn.ADD_SCHEMA:
      newState = utils.mergeRecursive({}, state)
      newState.formSchema = {}
      newState.formSchema.schema = {}
      newState.formSchema.schema[cn.fields] = {}
      newState.formSchema.schema[cn.ui] = {}
      newState.formSchema.schema[cn.ui][cn.fields] = {}
      return newState
    default:
      return state
  }
}


const undoableReducer = undoable(reducer, {
  filter: excludeAction([cn.CHANGE_SELECTED_ITEM, cn.ADD_ITEM_MODAL, cn.CLOSE_ADD_ITEM_MODAL])
})
export default undoableReducer


