import React from 'react'
import Input from './SchemaInput'
import InputDnD from './SchemaInputDnD'
import { Panel } from './SchemaContainer'
import * as Const from './constants'
import { Tab } from './Tab'

export const events =
  {
    handleChange: {},
    designerMode: false
  }

export function addInput(item) {
  if (events.designerMode) {
    return <InputDnD key={item.id} item={item} value={item.value} handleChange={events.handleChange} />
  } else {
    return <Input key={item.id} item={item} value={item.value} handleChange={events.handleChange} />
  }
}

export function renderItem(item) {
  if (item.type === Const.container) {

    if (item.options.type === Const.panel) {
      return (
        <Panel key={item.id} item={item}>
          {renderItems(item.items)}
        </Panel>
      )
    } else if (item.options.type === Const.tab) {
      return (
        <Tab key={item.id} item={item}></Tab>
      )
    }
  } else {
    return addInput(item)
  }

}


export function renderItems(items) {
  return items.map(item => renderItem(item))
}


