import React from 'react'
import { Provider } from 'react-redux';
import SchemaFormContainer from './schemaForm/SchemaFormContainer';

import store from './schemaForm/configureStore';


const App = (props) => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <SchemaFormContainer />
      </div>
    </Provider>
  )
}


export default App