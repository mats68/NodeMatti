import React, { Component } from 'react'

class SchemaForm extends Component {
  // constructor(props) {
  // super(props)
  //this.state.data = props.data
  // }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  handleChange = (e) => {
    console.log(e.target)
    // const newText = e.target.value;
    // this.setState({ name: newText });
  }

  addInput = (key) => {
    console.log(key)
    return <Input key={key} id={key} label={key} value={this.props.data[key]} />
  }

  render() {
    let x = []
    return (
      <form>
        <p>dada</p>
        {Object.keys(this.props.data).forEach(
          key => x.push(key)
        )}
        {
          x.map(i => this.addInput(i))
        }
      </form>
    )
  }
}

const Input = ({ id, label, value, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" className="form-control" value={value} onChange={(e) => { console.log(e) }}></input>
    </div>
  );

}


export default SchemaForm