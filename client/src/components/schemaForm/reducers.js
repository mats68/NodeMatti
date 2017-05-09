import * as Const from './constants'
import undoable, { excludeAction  } from 'redux-undo'
import {mergeRecursive} from './utils';

import { formSchema } from './sampleDataForm'
import { dataFilled } from './sampleDataSchema'

const initialState = {
  data: dataFilled,
  formSchema: formSchema
}

const reducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case Const.ADD_INPUT:
    case Const.SWITCH_POSITION:
    console.log('SWITCH_POSITION',action.data)
      return state   
    case Const.CHANGE_SELECTED_ID:
    default:
      return state
  }
}

const undoableReducer = undoable(reducer, {
  filter: excludeAction([Const.CHANGE_SELECTED_ID])
})
export default undoableReducer

