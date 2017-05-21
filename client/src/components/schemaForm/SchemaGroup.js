import React from 'react'
import Input from './SchemaInput'
import InputDnD from './SchemaInputDnD'
import { Panel } from './SchemaPanel'
import { cn, utils } from 'imports'
import { Tab } from './Tab'

export const SchemaGroup = (props) => {

  const { schema, handleChange, designFunktionen, designerMode } = props

  const renderInput = (item) => {
    if (designerMode) {
      return <InputDnD key={item.id} item={item} value={item.value} handleChange={handleChange} designFunktionen={designFunktionen} />
    } else {
      return <Input key={item.id} item={item} value={item.value} handleChange={handleChange} />
    }
  }

  const renderItem = (item) => {
    const sItem = utils.getItemFromSchema(item, schema)
    if (utils.isContainer(sItem)) {
      if (sItem.type === cn.panel) {
        return (
          <Panel key={item} item={sItem}>
            {renderItems(schema.containers[item].fields)}
          </Panel>
        )
      } else if (sItem.type === cn.tabControl) {
        return (
          <Tab key={item} item={sItem} schema={schema} renderItems={renderItems}></Tab>
        )
      }
    } else {
      return renderInput(sItem)
    }
  }

  const renderItems = (items) => {
    return items.map(item => renderItem(item))
  }

  return (
    <div className="row">
      {renderItems(schema.containers.form.fields)}
    </div>
  )
}



export default SchemaGroup