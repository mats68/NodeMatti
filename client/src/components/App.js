import React, { Component } from 'react'
import SchemaForm from './schemaForm/SchemaForm'
import { formSchema } from './schemaForm/sampleDataForm'
import { dataFilled } from './schemaForm/sampleDataSchema'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SchemaForm data={dataFilled} schema={formSchema} />
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>
          <TabPanel>
            <p>dada</p>
          </TabPanel>
          <TabPanel>
            <p>dududa</p>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}


export default App