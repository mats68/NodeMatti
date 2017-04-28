import React, { Component } from 'react'

class SchemaForm extends Component {
  constructor(props) {
    super(props)
    this.data = props.data
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  handleChange = (key,value) => {
    this.data[key] = value
    console.log(this.data)
    //console.log(e.target)
    // const newText = e.target.value;
    // this.setState({ name: newText });
  }

  addInput = (key) => {
    console.log(key)
    return <Input key={key} id={key} label={key} value={this.props.data[key]} handleChange={this.handleChange} />
  }

  render() {
    let x = []
    return (
      <form>
        <p>dada</p>
        {Object.keys(this.props.data).forEach(key => x.push(key))}
        {x.map(i => this.addInput(i))}
      </form>
    )
  }
}

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
    const {id, label} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
      </div>
    );
  }
}



export default SchemaForm