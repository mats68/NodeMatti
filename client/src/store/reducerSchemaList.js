import { cn } from 'imports'
//todo import merge from 'lodash/merge'


const initialState = []

const reducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case cn.LOAD_SCHEMA_LIST:
      if (action.data.status === cn.STATUS.HTTP_FINISHED) {
        newState = action.data.data.slice(0)
        return newState;
      }
      return state

    case cn.SCHEMA_LIST_ADD:
      newState = state.slice(0)
      newState.push(action.data.data)
      return newState
    case cn.SCHEMA_LIST_UPDATE:
      newState = state.map((item) => {
        if (item._id === action.data._id) {
          item = Object.assign({}, item, action.data)
        }
        return item
      })
      return newState

    default:
      return state;
  }
}

export default reducer