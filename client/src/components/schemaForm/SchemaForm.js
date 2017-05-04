import React, { Component } from 'react'
import Input from './SchemaInput'
import { mergeRecursive, setValueFromDottedKey, getValueFromDottedKey } from './utils'
import * as Const from './Constants'


class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
    this.items = props.schema

    //todo check same names of schemas
    //this.items = mergeRecursive({}, ...props.schemas)
    console.dir(JSON.stringify(this.items))


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addInput = this.addInput.bind(this)
    this.fillItemsRecursive = this.fillItemsRecursive.bind(this)
    this.renderItems = this.renderItems.bind(this)

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('data', this.data)
  }

  handleChange = (key, value) => {
    let data = this.data
    setValueFromDottedKey(key, data, value)
  }

  addInput = (item) => {
    return <Input key={item.id} item={item} value={item.value} handleChange={this.handleChange} />
  }

  fillItemsRecursive(itemList, renderitems, data, prefix) {
    Object.keys(itemList).forEach(name => {
      if (typeof itemList[name].type === 'object') {

        /*        if (itemList[name].uischema) {
                  itemList[name].type = mergeRecursive({}, itemList[name].type, itemList[name].uischema)
                  //todo else load default uischema 
                  //todo load default data values subschema
                }
                this.fillItemsRecursive(itemList[name].type, renderitems, data, name + '.')
        */
      } else {
        if (name !== Const.ui) {
          let item = {}
          item = itemList[name]
          let fullname = prefix + name;
          item.id = fullname;
          item.value = getValueFromDottedKey(fullname, data)
          item[Const.ui] = itemList[Const.ui][name]
          renderitems.push(item)
        }
      }
    }
    )
  }
  renderItems() {
    let renderItems = []
    let itemList = mergeRecursive({},this.items)
    this.fillItemsRecursive(itemList, renderItems, this.data, '')
    console.log('this.teims',this.items)
    return renderItems.map(item => this.addInput(item))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderItems()}
        <button type="submit" className="btn btn-success">OK</button>
      </form>
    )
  }
}


export default SchemaForm