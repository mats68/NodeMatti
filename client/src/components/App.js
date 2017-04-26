import React, { Component } from 'react'
import axios from 'axios'
import KundenForm from './KundenForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }

  }
  handleListItemClicked = (id) => {
    console.log(id)
  }

  insertKunde = (data) => {
    axios.post(this.props.url + 'insert/kunden', data)
      .then(res => {
        //console.log(res.data.ops[0])
        this.setState((prevState) => {
          let newList = prevState.data
          newList.push(res.data.ops[0])
          return { data: newList }
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

  loadCommentsFromServer = () => {
    axios.get(this.props.url + 'query/kunden')
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    return (
      <div>
        <Liste list={this.state.data} handleListItemClicked={this.handleListItemClicked} />
        <KundenForm insertKunde={this.insertKunde} />
      </div>
    )
  }
}



const Liste = (props) => {
  return (
    <ul>
      {props.list.map(l => <ListItem key={l._id} item={l} handleListItemClicked={props.handleListItemClicked} />)}
    </ul>
  )
}


const ListItem = (props) => {
  return (
    <li onClick={(e) => props.handleListItemClicked(props.item._id)}>{props.item.name}</li>
  )
}




export default App