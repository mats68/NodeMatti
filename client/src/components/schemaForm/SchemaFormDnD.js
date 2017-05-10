import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SchemaForm from './SchemaForm'
import { dataFilled } from './sampleDataSchema'


const SchemaFormDnD = (props) => {
  
  return (
    <SchemaForm data={dataFilled} designerMode={true} {...props}/>
  )
}

export default DragDropContext(HTML5Backend)(SchemaFormDnD);
