import * as Const from './constants'
import undoable, { excludeAction } from 'redux-undo'
import { mergeRecursive } from './utils';

import { formSchema } from './sampleDataForm'
import { dataFilled } from './sampleDataSchema'

const initialState = {
  data: dataFilled,
  formSchema: formSchema
}

function iterateUiSchemaRecursive(schema, parentSchema, parentId, fun, args) {
  Object.keys(schema).forEach(name => {
    fun(schema[name], name, parentSchema, parentId, ...args)
    if (schema[name].type === Const.container) {
      iterateUiSchemaRecursive(schema[name][Const.fields], schema, name, fun, args)
    } else {
    //  fun(schema[name], name, parentSchema, parentId, ...args)
    }
  })
}

function iterateSchemaRecursive(schema, uischema, fun, args) {
  Object.keys(schema).forEach(name => {
    if (typeof schema[name].type === 'object') {
      iterateSchemaRecursive(schema[name].type[Const.fields], schema[name].type[Const.ui][Const.fields], fun, args)
    }
  })
  iterateUiSchemaRecursive(uischema, {}, '', fun, args)
}

function updatePosMal10(item, id, parent,parentName, itemInfo) {
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

function fillArry(item, id, parent,parentName, arr) {
  arr.push(item)
}  


function changePos(item, id, parent, parentName,itemInfo, dropBefore) {
  if (id === itemInfo.sourceItemId) {
    if (dropBefore) {
      item.pos = itemInfo.targetItem.pos - 1
    } else {
      item.pos = itemInfo.targetItem.pos + 1
    }
  }
}


function updateSortPos(newState, data) {
  const { sourceItem, targetItem, dropBefore } = data
  let schema = newState.formSchema.schema[Const.fields]
  let uischema = newState.formSchema.schema[Const.ui][Const.fields]
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
  iterateSchemaRecursive(schema, uischema, changePos, [itemInfo,dropBefore])
  
  if (itemInfo.sourceItemParentName !== itemInfo.targetItemParentName) {
    if (itemInfo.targetItemParentName === '') {
       uischema[itemInfo.sourceItemId] = itemInfo.sourceItem 
    } else {
      itemInfo.targetItemParent[itemInfo.targetItemParentName][Const.fields][itemInfo.sourceItemId] =  itemInfo.sourceItem 
    }
    if (itemInfo.sourceItemParentName === '') {
      delete uischema[itemInfo.sourceItemId]
    } else {
      delete itemInfo.sourceItemParent[itemInfo.sourceItemParentName][Const.fields][itemInfo.sourceItemId]
    }
  }
  // console.log('uistate',uischema)
  let arr = []
  iterateSchemaRecursive(schema, uischema, fillArry, [arr])
  arr.sort((a,b) => {
    return a.pos - b.pos
  })
  //console.log('arr',arr)
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i+1 
  }
 
  
  return newState

}


const reducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case Const.ADD_INPUT:
    case Const.SWITCH_POSITION:
      newState = mergeRecursive({}, state)
      return updateSortPos(newState, action.data)
    case Const.CHANGE_SELECTED_ID:
      return state

    default:
      return state
  }
}

//export default reducer

const undoableReducer = undoable(reducer, {
  filter: excludeAction([Const.CHANGE_SELECTED_ID])
})
export default undoableReducer


