import React, { Component } from 'react'
import SchemaForm from './schemaForm/SchemaForm'
import { formSchema } from './schemaForm/sampleDataForm'
import { dataFilled } from './schemaForm/sampleDataSchema'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SchemaForm data={dataFilled} schema={formSchema} />

      </div>


    )
  }
}


export default App