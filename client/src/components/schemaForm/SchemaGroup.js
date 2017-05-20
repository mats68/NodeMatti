import React from 'react'
import Input from './SchemaInput'
import InputDnD from './SchemaInputDnD'
import { Panel } from './SchemaPanel'
import { cn } from 'imports'
import { Tab } from './Tab'

export const SchemaGroup = (props) => {

  const { handleChange, designFunktionen, designerMode } = props
  let renderItem
  let renderItems


  const renderInput = (item) => {
    if (designerMode) {
      return <InputDnD key={item.id} item={item} value={item.value} handleChange={handleChange} designFunktionen={designFunktionen} />
    } else {
      return <Input key={item.id} item={item} value={item.value} handleChange={handleChange} />
    }
  }

  renderItem = (item) => {
    if (item.type === cn.container) {
      if (item.containertype === cn.panel) {
        return (
          <Panel key={item.id} item={item}>
            {renderItems(item.items)}
          </Panel>
        )
      } else if (item.containertype === cn.tab) {
        return (
          <Tab key={item.id} item={item} renderItems={renderItems}></Tab>
        )
      } else if (item.containertype === cn.subschema) {
        return (
          <Panel key={item.id} item={item}>
            {renderItems(item.items)}
          </Panel>
        )
      }
    } else {
      return renderInput(item)
    }
  }

  renderItems = (items) => {
    return items.map(item => renderItem(item))
  }

  return (
    <div className="row">
      {renderItems(props.items)}
    </div>
  )
}



export default SchemaGroup