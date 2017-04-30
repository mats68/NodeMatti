import React, { Component } from 'react'
import Input from './SchemaInput'
import {mergeRecursive} from './utils'

class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
    //console.dir(...props.implements)
    this.items = mergeRecursive({},props.schema,props.uischema,...props.implements)
    // console.dir(this.items)

  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (key,value) => {
    this.data[key] = value
    //console.log(this.data)
  }

  addInput = (item) => {
    //console.log(props.data,name)

     console.log(JSON.stringify(item))
    // console.log(this.data[item.id])
    
    return <Input key={item.id} item={item} value={this.data[item.id]} handleChange={this.handleChange} />
  }

  render() {
    let items = []
    return (
      <form>
        <p>dada</p>
        {Object.keys(this.items).forEach(name => {this.items[name].id = name; items.push(this.items[name])} )}
        {items.map(item => this.addInput(item))}
      </form>
    )
  }
}


export default SchemaForm