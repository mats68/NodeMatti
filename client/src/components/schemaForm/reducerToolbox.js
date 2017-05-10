import * as Const from './constants'
import { mergeRecursive } from './utils';
//import merge from 'lodash/merge'


const initialState = {
  selectedItemId: 0,
  selectedItemLabel: '',
  newItem: {
    ModalIsOpen: false,
    id: '',
    label: ''

  }
}


const reducer = (state = initialState, action) => {
  let newState = mergeRecursive({}, state)  //todo ev lodash _.merge({},state)
  switch (action.type) {
    case Const.CHANGE_SELECTED_ITEM:
      newState.designerOptions.selectedItemId = action.data.id
      newState.designerOptions.selectedItemText = action.data.label
      return newState
    case Const.ADD_ITEM_MODAL:
      newState.designerOptions.newItem.ModalIsOpen = true
      return newState
    case Const.CLOSE_ADD_ITEM_MODAL:
      newState.designerOptions.newItem.ModalIsOpen = false
      return newState
    default:
      return state
  }
}

export default reducer


