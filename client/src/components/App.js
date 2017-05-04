import React, { Component } from 'react'
import SchemaForm from './schemaForm/SchemaForm'
import * as schema from './schemaForm/schemaExampleData'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SchemaForm data={schema.dataFilled} schema={schema.newSchema}/> 
      </div>
    )
  }
}


export default App