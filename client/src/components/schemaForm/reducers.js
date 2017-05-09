import * as Const from './constants'
import undoable, { excludeAction } from 'redux-undo'
import { mergeRecursive } from './utils';

import { formSchema } from './sampleDataForm'
import { dataFilled } from './sampleDataSchema'

const initialState = {
  data: dataFilled,
  formSchema: formSchema
}

function iterateUiSchemaRecursive(schema, fun, args) {
  Object.keys(schema).forEach(name => {
    if (schema[name].type === Const.container) {
      iterateUiSchemaRecursive(schema[name][Const.fields], fun, args)
    } else {
      fun(schema[name], name, ...args)
    }
  })
}

function iterateSchemaRecursive(schema, uischema, fun, args) {
  Object.keys(schema).forEach(name => {
    if (typeof schema[name].type === 'object') {
      iterateSchemaRecursive(schema[name].type[Const.fields], schema[name].type[Const.ui][Const.fields], fun, args)
    }
  })

  iterateUiSchemaRecursive(uischema, fun, args)

}

function updatePosMal10(item, id, targetPos) {
  item.pos *= 10
  if (id === targetPos.id) { targetPos.pos = item.pos }
}

function changePos(item, id, sourceId, targetPos, dropBefore) {
  if (id === sourceId) {
    if (dropBefore) {
      item.pos = targetPos - 1
    } else {
      item.pos = targetPos + 1
    }
  }
}


function updateSortPos(newState, data) {
  const { sourceItem, targetItem, dropBefore } = data
  let schema = newState.formSchema.schema[Const.fields]
  let uischema = newState.formSchema.schema[Const.ui][Const.fields]
  //let pos = 1
  let targetPos = { id: targetItem.id, pos: 0 }

  iterateSchemaRecursive(schema, uischema, updatePosMal10, [targetPos])
  iterateSchemaRecursive(schema, uischema, changePos, [sourceItem.id,targetPos.pos,dropBefore])


  //let temp = Object.assign({}, state)
  /*  let list = newState.inputs.map((item) => {
      item.pos *= 10
      if (item.id === targetItem.id) { targetItemPos = item.pos }
      return item
    })
  
    list = list.map((item) => {
      if (item.id === sourceItem.id) {
        if (dropBefore) {
          item.pos = targetItemPos - 1
        } else {
          item.pos = targetItemPos + 1
        }
      }
      return item
    })
    
    list.sort((a, b) => {
      return a.pos - b.pos
    })
    for (let i = 0; i < list.length; i++) {
      list[i].pos = i + 1
    }
    newState.inputs = list
  */  //console.log(list,state)
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

const undoableReducer = undoable(reducer, {
  filter: excludeAction([Const.CHANGE_SELECTED_ID])
})
export default undoableReducer

