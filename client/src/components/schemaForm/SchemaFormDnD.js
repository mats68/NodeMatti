import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SchemaForm from './SchemaForm'

const SchemaFormDnD = (props) => {

  return (
    <SchemaForm designerMode={true} {...props}/>
  )
}

export default DragDropContext(HTML5Backend)(SchemaFormDnD);
