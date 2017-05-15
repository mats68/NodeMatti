import {cn,utils} from '../imports'
//todo import merge from 'lodash/merge'


const initialState = []


const reducer = (state = initialState, action) => {
  let newState = utils.mergeRecursive({}, state)

  switch (action.type) {
    case cn.LOAD_SCHEMA_LIST:
      if (action.data.status === cn.HTTP_STATUS.LOADING) {

      } else if (action.data.status === cn.HTTP_STATUS.FINISHED) {
          newState = action.data.data
      }
      return newState;

    default:
      return state;
  }
}

export default reducer