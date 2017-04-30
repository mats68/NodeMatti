import React, { Component } from 'react'
import Input from './SchemaInput'
import { mergeRecursive,setValueFromDottedKey, getValueFromDottedKey } from './utils'


class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
    //console.dir(...props.implements)
    //todo check same names of schemas
    this.items = mergeRecursive({}, ...props.schemas)
    //console.dir(JSON.stringify(this.items))

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
    setValueFromDottedKey(key,data,value)
/*    let obj = this.data
    let i = 1
    for (let i = 0; i < (key.length - 1); i++) {
      obj = obj[key[i]] || {}
    }
    obj[key[key.length - 1]] = value
*/
 }

  addInput = (item) => {
    //console.log(props.data,name)

    // console.log(JSON.stringify(item))
    // console.log(this.data[item.id])

    return <Input key={item.id} item={item} value={item.value} handleChange={this.handleChange.bind(this)} />
  }

  fillItemsRecursive(itemList, renderitems, data,prefix) {
    Object.keys(itemList).forEach(name => {
      if (typeof itemList[name].type === 'object') {
        if (itemList[name].uischema) {
          itemList[name].type = mergeRecursive({}, itemList[name].type, itemList[name].uischema)
          //todo else load default uischema 
          //todo load default data values subschema
        }
        this.fillItemsRecursive(itemList[name].type, renderitems, data, name + '.')
      } else {
        let fullname = prefix + name;
        itemList[name].id = fullname;
        itemList[name].value = getValueFromDottedKey(fullname,data)
        renderitems.push(itemList[name]);
      }
    }
    )
  }
  renderItems() {
    let items = []
    this.fillItemsRecursive(this.items, items, this.data,'')
    //Object.keys(this.items).forEach(name => { this.items[name].id = name; items.push(this.items[name]) })
    //Object.keys(this.items).forEach(name => { this.items[name].id = name; items.push(this.items[name]) })
    //console.log(items)
    return items.map(item => this.addInput(item))
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