import React, { Component } from 'react'
import axios from 'axios'
import KundenForm from './KundenForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], selectedId: 0 }

  }
  handleListItemClicked = (id) => {
    this.setState({ selectedId: id })
  }

  handleListItemDelete = (id) => {
    if (id !== 0) {
      axios.delete(this.props.url + 'delete/kunden/' + id)
        .then(res => {
          console.log('hey')
          this.setState((prevState) => {
          let newList = prevState.data.filter((item) => {
            return item._id !== id
          })
          console.log('newList', newList)
          return { data: newList }
          })
        })
        .catch(err => {
          console.error(err);
        })


    }
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
        <Liste list={this.state.data} selectedId={this.state.selectedId} handleListItemClicked={this.handleListItemClicked} handleListItemDelete={this.handleListItemDelete} />
        <KundenForm insertKunde={this.insertKunde} />
      </div>
    )
  }
}



const Liste = (props) => {
  return (
    <ul>
      {props.list.map(l => <ListItem key={l._id} item={l} selectedId={props.selectedId} handleListItemClicked={props.handleListItemClicked} handleListItemDelete={props.handleListItemDelete} />)}
    </ul>
  )
}


const ListItem = (props) => {
  const showBtns = () => {
    if (props.selectedId === props.item._id)
      return (
       <span>
         <span className="btn btn-success"> <i className="fa fa-pencil" /> </span> 
         <span className="btn btn-danger" onClick={(e) => { props.handleListItemDelete(props.item._id)  }}> <i className="fa fa-trash" /> </span>
       </span>
      )
  }
  return (
    <li onClick={(e) => props.handleListItemClicked(props.item._id)}>{props.item.name}  {showBtns()} </li>
  )
}




export default App