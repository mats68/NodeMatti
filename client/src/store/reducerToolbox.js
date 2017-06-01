import { cn, utils } from 'imports'
//todo import merge from 'lodash/merge'


const initialState = {
  saving: false,
  selectedItemId: 0,
  selectedItemLabel: '',
  newSchema: {
    ModalIsOpen: false,
    id: '',
    label: ''
  },
  newItem: {
    ModalIsOpen: false,
    id: '',
    label: ''
  },
  schemaJSON: {
    ModalIsOpen: false,
  },
  errorItem: {
    ModalIsOpen: false,
    title: '',
    message: ''
  }
}


const reducer = (state = initialState, action) => {
  let newState = utils.mergeRecursive({}, state)  //todo ev lodash _.merge({},state)
  switch (action.type) {
    case cn.CHANGE_SELECTED_ITEM:
      newState.selectedItemId = action.data.id
      newState.selectedItemText = action.data.label
      return newState
    case cn.ADD_ITEM:
      if (action.data.status === cn.STATUS.MODAL_OPEN) {
        newState.newItem.ModalIsOpen = true
      } else if (action.data.status === cn.STATUS.MODAL_CLOSE) {
        newState.newItem.ModalIsOpen = false
      }
      return newState
    case cn.SAVE_SCHEMA:
      if (action.data.status === cn.STATUS.MODAL_OPEN) {
        newState.newSchema.ModalIsOpen = true
      } else if (action.data.status === cn.STATUS.MODAL_CLOSE) {
        newState.newSchema.ModalIsOpen = false
      } else if (action.data.status === cn.STATUS.HTTP_LOADING) {
        newState.saving = true
      } else if (action.data.status === cn.STATUS.HTTP_FINISHED) {
        newState.saving = false
      } else if (action.data.status === cn.STATUS.HTTP_ERROR) {
        newState.saving = false
        newState.errorItem.ModalIsOpen = true
        newState.errorItem.title = 'Error'
        newState.errorItem.message = action.data.err
      }

      return newState
    case cn.SCHEMA_JSON:
      if (action.data.status === cn.STATUS.MODAL_OPEN) {
        newState.schemaJSON.ModalIsOpen = true
      } else if (action.data.status === cn.STATUS.MODAL_CLOSE) {
        newState.schemaJSON.ModalIsOpen = false
      }
      return newState
    default:
      return state
  }
}

export default reducer


