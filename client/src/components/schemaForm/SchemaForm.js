import React, { Component } from 'react'
import { utils } from 'imports'
import SchemaGroup from './SchemaGroup';
import merge from 'lodash/merge'


class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
    //todo check same names of schemas
    this.schema = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.buildItemsFromUISchema = this.buildItemsFromUISchema.bind(this)
    // this.buildItemsRecursive = this.buildItemsRecursive.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('data', this.data)
  }

  handleChange(key, value) {
    let data = this.data
    utils.setValueFromDottedKey(key, data, value)
  }

/*  buildItemsFromUISchema(_schemaItems, _uiItems, uiItems, prefix) {
    if (!_schemaItems || !_uiItems) { return }
    Object.keys(_uiItems).forEach(name => {
      let item = {}
      if (_uiItems[name].type === cn.container) {
        this.containerCount++;
        item.id = name + this.containerCount.toString()
        item.type = cn.container
        item.pos = _uiItems[name].pos
        item.containertype = _uiItems[name].containertype
        //item.options = _uiItems[name].options
        item.items = []
        this.buildItemsFromUISchema(_schemaItems, _uiItems[name][cn.fields], item.items, prefix)
        item.items.sort((a, b) => {
          return a.pos - b.pos
        })
        uiItems.push(item)
      } else {
        item = utils.mergeRecursive({}, _schemaItems[name], _uiItems[name])
        let fullname = prefix + name
        item.id = fullname
        let val = utils.getValueFromDottedKey(fullname, this.data)
        if (!val) {
          val = ''
          utils.setValueFromDottedKey(fullname, this.data, val)
        }
        item.value = val

        uiItems.push(item)
        // console.log('item', item)
      }
    })
  }

  buildItemsRecursive(items, uiItems, prefix) {
    if (!items[cn.fields] || !items[cn.ui] || !items[cn.ui][cn.fields]) { return }
    let schemaList = items[cn.fields]
    let uiList = items[cn.ui][cn.fields]
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
*/
  render() {

    //merge formSchema.schema.fields with formSchema.UIschema.fields
    this.schema = merge({}, this.props.formSchema.schema, this.props.formSchema.UIschema)
    Object.keys(this.schema.containers).forEach(name => this.schema.containers[name].id = name)
    Object.keys(this.schema.fields).forEach(name => this.schema.fields[name].id = name)


    //this.schema = utils.mergeRecursive({}, this.props.formSchema.schema, ...this.props.formSchema.implements || {})

    // console.log('uilist', uiItemList)
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="container-fluid">
          <SchemaGroup schema={this.schema} handleChange={this.handleChange} designFunktionen={this.props.designFunktionen} designerMode={this.props.designerMode}></SchemaGroup>
          <div className="row">
            <p></p>
          </div>
          <div className="row">
            <div className={utils.getColumnWidths([1, 2, 3, 4])}>
              <button type="submit" className="btn btn-success" > Save</button >
            </div>
          </div>
        </div>
      </form >
    )
  }
}


export default SchemaForm