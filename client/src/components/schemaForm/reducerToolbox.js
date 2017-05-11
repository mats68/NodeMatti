import * as Const from './constants'
import { mergeRecursive } from './utils';
//import merge from 'lodash/merge'


const initialState = {
  saving: false,
  selectedItemId: 0,
  selectedItemLabel: '',
  newItem: {
    ModalIsOpen: false,
    id: '',
    label: ''
  },
  errorItem: {
    ModalIsOpen: false,
    title: '',
    message: ''
  }
}


const reducer = (state = initialState, action) => {
  let newState = mergeRecursive({}, state)  //todo ev lodash _.merge({},state)
  switch (action.type) {
    case Const.CHANGE_SELECTED_ITEM:
      newState.selectedItemId = action.data.id
      newState.selectedItemText = action.data.label
      return newState
    case Const.ADD_ITEM_MODAL:
      newState.newItem.ModalIsOpen = true
      return newState
    case Const.CLOSE_ADD_ITEM_MODAL:
      newState.newItem.ModalIsOpen = false
      return newState
    case Const.SAVE_SCHEMA_START:
      newState.saving = true
      return newState
    case Const.SAVE_SCHEMA_END:
      newState.saving = false
      return newState
    case Const.SAVE_SCHEMA_ERROR:
      newState.errorItem.ModalIsOpen = true
      newState.errorItem.title = 'Error'
      newState.errorItem.message = action.data
      return newState
    case Const.SAVE_SCHEMA_ERROR_CLOSE:
      newState.errorItem.ModalIsOpen = false
      newState.errorItem.title = ''
      newState.errorItem.message = ''
      return newState
     
    default:
      return state
  }
}

export default reducer


