import {cn,utils} from '../imports'
//todo import merge from 'lodash/merge'


const initialState = []

function updateList(formSchema) {

}


const reducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case cn.LOAD_SCHEMA_LIST:
      if (action.data.status === cn.STATUS.HTTP_FINISHED) {
          newState = action.data.data.slice(0)
          return newState;
      }
      return state

    case cn.SAVE_SCHEMA:
      if (action.data.status === cn.STATUS.ACTION_END) {
        newState = state.slice(0)
        newState.push(action.data.data)
        return newState
/*        newState.formSchema = Object.assign({}, state.formSchema, action.data.data)
        newState.formSchema.schema = state.formSchema.schema
*/      }
      return state

    default:
      return state;
  }
}

export default reducer