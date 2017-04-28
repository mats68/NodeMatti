import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  handleChange = (e) => {
    let val = e.target.value
    let key = e.target.id
    //console.log(e.target.value)
    this.setState({value: val})
    this.props.handleChange(key,val)
  }
  

  render() {
    const {id,type,label,rows,min,max} = this.props.item
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default Input