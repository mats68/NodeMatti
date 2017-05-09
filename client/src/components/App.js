import React, { Component } from 'react'
import SchemaFormDnD from './schemaForm/SchemaFormDnD'
import { formSchema } from './schemaForm/sampleDataForm'
import { dataFilled } from './schemaForm/sampleDataSchema'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SchemaFormDnD data={dataFilled} schema={formSchema} />

      </div>


    )
  }
}


export default App