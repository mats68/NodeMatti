import React, { Component } from 'react'
import { mergeRecursive, setValueFromDottedKey, getValueFromDottedKey } from './utils'
import * as Const from './Constants'
import * as renderer from './renderItems'


class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
    //todo check same names of schemas
    //if (props.schema.implements) {
    this.items = mergeRecursive({}, props.schema.schema, ...props.schema.implements || {})
    //}
    //console.dir(JSON.stringify(this.items))
    this.uiItems = []

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    renderer.events.handleChange = this.handleChange
    //this.fillItemsRecursive = this.fillItemsRecursive.bind(this)
    this.buildItemsFromUISchema = this.buildItemsFromUISchema.bind(this)
    this.buildItemsRecursive = this.buildItemsRecursive.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('data', this.data)
  }

  handleChange(key, value) {
    let data = this.data
    setValueFromDottedKey(key, data, value)
  }

  buildItemsFromUISchema(_schemaItems, _uiItems, uiItems, prefix) {
    if (!_schemaItems || !_uiItems) { return }
    Object.keys(_uiItems).forEach(name => {
      let item = {}
      if (_uiItems[name].type === Const.container) {
        this.containerCount++;
        item.id = name + this.containerCount.toString()
        item.type = Const.container
        item.options = _uiItems[name].options
        item.items = []
        this.buildItemsFromUISchema(_schemaItems, _uiItems[name][Const.fields], item.items, prefix)
        uiItems.push(item)
      } else {
        item = mergeRecursive({}, _schemaItems[name], _uiItems[name])
        let fullname = prefix + name
        item.id = fullname
        let val = getValueFromDottedKey(fullname, this.data)
        if (!val) {
          val = ''
          setValueFromDottedKey(fullname, this.data, val)
        }
        item.value = val

        uiItems.push(item)
      }
    })
  }

  buildItemsRecursive(items, uiItems, prefix) {
    if (!items[Const.fields] || !items[Const.ui] || !items[Const.ui][Const.fields]) { return }
    let schemaList = items[Const.fields]
    let uiList = items[Const.ui][Const.fields]
    // let list = mergeRecursive({}, schemaList,uiList)
    this.buildItemsFromUISchema(schemaList, uiList, uiItems, prefix)

    Object.keys(schemaList).forEach(name => {
      if (typeof schemaList[name].type === 'object') {
        this.buildItemsRecursive(schemaList[name].type, uiItems, name + '.')
      }
    })
  }

  render() {
    this.containerCount = 0;
    let uiItemList = [];
    // console.log(this.items)
    this.buildItemsRecursive(this.items, uiItemList, '')
    // console.log('uilist', uiItemList)
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          {renderer.renderItems(uiItemList)}
          < button type="submit" className="btn btn-success" > OK</button >
        </div>
      </form >
    )
  }
}


export default SchemaForm