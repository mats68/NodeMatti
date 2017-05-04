import React, { Component } from 'react'

/*const kundenSchema = {
  _id: '',
  name: '',
  vorname: ''
}

*/
export default class KundenForm extends Component {
    constructor(props) {
        super(props)
        this.state = { name: props.schema.name, vorname: props.schema.vorname }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.name && this.state.vorname) {
            console.log('id', this.props.schema._id)
            //update record
            if (this.props.schema._id) {
               let updObj = this.state
               updObj._id = this.props.schema._id 
              this.props.handleForm(updObj)
            } else {
              //insert record  
              this.props.handleForm(this.state)
              this.setState({ name: '', vorname: '' })
            }
        }
    }
    handleChangeName = (e) => {
        const newText = e.target.value;
        this.setState({ name: newText });
    }
    handleChangeVorName = (e) => {
        const newText = e.target.value;
        this.setState({ vorname: newText });
    }

    showCancelBtn = () => {
        if (this.props.schema._id) {
            return (
                <button className="btn btn-danger"><i className="fa fa-times" /></button>
            )
        }
    }

    showTitle = () => {
        if (this.props.schema._id) {
            return (
                <p>Update Data</p>
            )
        } else {
            return (
                <p>Insert Data</p>
            )

        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.showTitle()}
                <label className="labelItem">Name</label>
                <input type='text' value={this.state.name} onChange={this.handleChangeName} className="editItem"/>
                <label className="labelItem">Vorname</label>
                <input type='text' value={this.state.vorname} onChange={this.handleChangeVorName}  className="editItem"/>
                <button type="Submit" className="btn btn-success"> <i className="fa fa-check"/>  </button>
                {this.showCancelBtn()}
            </form>
        )
    }
}

