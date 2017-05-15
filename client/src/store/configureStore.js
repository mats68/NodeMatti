import { createStore, combineReducers, applyMiddleware  } from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import formSchema from './reducerSchema';
import designerOptions from './reducerToolbox';
import schemaList from './reducerSchemaList';


const loggerMiddleware = createLogger()

const reducer = combineReducers({
  formSchema,
  designerOptions,
  schemaList
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store
