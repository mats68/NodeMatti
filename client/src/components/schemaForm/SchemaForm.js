import React, { Component } from 'react'
import { mergeRecursive, setValueFromDottedKey, getValueFromDottedKey } from './utils'
import * as Const from './constants'
import * as renderer from './renderItems'
import {getColumnWidths} from './utils';


class SchemaForm extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
    this.data = props.data
    //todo check same names of schemas
    this.items = {}
    this.uiItems = []
    this.containerCount = 0;
    //}
    //console.dir(JSON.stringify(this.items))

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    //todo renderer schlecht
    renderer.events.handleChange = this.handleChange
   
    renderer.events.designerMode = props.designerMode
    renderer.events.funktionen = props.funktionen

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
        item.pos = _uiItems[name].pos
        item.options = _uiItems[name].options
        item.items = []
        this.buildItemsFromUISchema(_schemaItems, _uiItems[name][Const.fields], item.items, prefix)
        item.items.sort((a, b) => {
          return a.pos - b.pos
        })
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
        console.log('item', item)
      }
    })
  }

  buildItemsRecursive(items, uiItems, prefix) {
    if (!items[Const.fields] || !items[Const.ui] || !items[Const.ui][Const.fields]) { return }
    let schemaList = items[Const.fields]
    let uiList = items[Const.ui][Const.fields]
    // let list = mergeRecursive({}, schemaList,uiList)
    this.buildItemsFromUISchema(schemaList, uiList, uiItems, prefix)
    uiItems.sort((a, b) => {
      return a.pos - b.pos

    })

    Object.keys(schemaList).forEach(name => {
      if (typeof schemaList[name].type === 'object') {
        this.buildItemsRecursive(schemaList[name].type, uiItems, name + '.')
      }
    })
  }

  render() {
    this.containerCount = 0;
    this.items = mergeRecursive({}, this.props.formSchema.schema, ...this.props.formSchema.implements || {})
    this.uiItems = []
    let uiItemList = [];
    // console.log(this.items)
    this.buildItemsRecursive(this.items, uiItemList, '')

    console.log('uilist', uiItemList)
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container-fluid">
          <div className="row">
            {renderer.renderItems(uiItemList)}
          </div>
          <div className="row">
            <p></p>
          </div>
          <div className="row">
            <div className={getColumnWidths([1,2,3,4])}>
              <button type="submit" className="btn btn-success" > Save</button >
            </div>
          </div>
        </div>
      </form >
    )
  }
}


export default SchemaForm