import React from 'react'
import { Provider } from 'react-redux';

import SchemaFormContainer from './schemaForm/SchemaFormContainer';
import ToolBoxContainer from './schemaForm/ToolBoxContainer';
import store from './schemaForm/configureStore';


const App = (props) => {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="content">
          <SchemaFormContainer />
        </div>
        <ToolBoxContainer />
      </div>
    </Provider>
  )
}


export default App