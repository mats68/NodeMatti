import { createStore, combineReducers, applyMiddleware  } from 'redux'
import formSchema from './reducerSchema';
import {createLogger} from 'redux-logger'
import designerOptions from './reducerToolbox';
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const reducer = combineReducers({
  formSchema,
  designerOptions
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
