import React, { Component } from 'react'

export default class KundenForm extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', vorname: ''}
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.insertKunde(this.state)
        this.setState({name: '', vorname: ''});  
    }
    handleChange = (e) => {
        const newText = e.target.value;  
        this.setState({name: newText});  
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.name} onChange={this.handleChange}/>
            </form>
        )
    }
}

