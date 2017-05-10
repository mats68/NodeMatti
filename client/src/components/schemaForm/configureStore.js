import { createStore, combineReducers } from 'redux'
import formSchema from './reducerSchema';
import designerOptions from './reducerToolbox';

const reducer = combineReducers({
  formSchema,
  designerOptions
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())
export default store
