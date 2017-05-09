import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SchemaForm from './SchemaForm'

const SchemaFormDnD = (props) => {

  const handleDrop = (sourceItem, targetItem, dropBefore) => {
    const data = { sourceItem, targetItem, dropBefore }
    this.props.funktionen.handleSwitchPosition(data)
  }
  
  return (
    <SchemaForm designerMode={true} {...props}/>
  )
}

export default DragDropContext(HTML5Backend)(SchemaFormDnD);
