import React from 'react'
import { Provider } from 'react-redux';

import SchemaFormContainer from './schemaForm/SchemaFormContainer';
import ToolBoxContainer from './schemaForm/ToolBoxContainer';
import store from './schemaForm/configureStore';


const App = (props) => {
  return (
    <Provider store={store} url={props.url}>
      <div className="main">
        <div className="content">
          <SchemaFormContainer />
        </div>
        <div className="footer">
          <ToolBoxContainer />
        </div>
      </div>
    </Provider>
  )
}


export default App