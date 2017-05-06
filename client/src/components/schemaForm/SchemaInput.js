import React, { Component } from 'react'
import { getColumnWidths } from './utils'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let val = e.target.value
    let key = e.target.id; //.split('.')

    this.setState({ value: val })
    this.props.handleChange(key, val)
  }


  render() {
    const { id, type, label, cols } = this.props.item

    return (
      <div className={getColumnWidths(cols)}>
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input id={id} ref={id} type={type} className="form-control" value={this.state.value} onChange={this.handleChange}></input>
        </div>
      </div>
    );
  }
}

export default Input