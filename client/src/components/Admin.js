import React from 'react'
import { Provider } from 'react-redux';

import SchemaFormContainer from './schemaForm/SchemaFormContainer';
import ToolBoxContainer from './schemaForm/ToolBoxContainer';
import store from '../store/configureStore';


const Admin = (props) => {
  return (
    <Provider store={store} url={props.url}>
      <div>
        <div>
          <SchemaFormContainer />
        </div>
        <div>
          <ToolBoxContainer />
        </div>
      </div>
    </Provider>
  )
}


export default Admin