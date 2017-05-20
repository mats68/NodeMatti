import React, { Component } from 'react';
import axios from 'axios'
import 'app.css'

class Liste extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], selectedId: '' }
  }

  handleListItemClicked = (id) => {
    console.log('state', this.state)
    if (id === this.state.selectedId) {
      return this.setState({ selectedId: '' })
    }
    this.setState({ selectedId: id })
  }

  handleListItemDelete = (id) => {
    if (id !== 0) {
      axios.delete(this.props.url + 'delete/kunden/' + id)
        .then(res => {
          this.setState((prevState) => {
            let newList = prevState.data.filter((item) => {
              return item._id !== id
            })
            return { data: newList }
          })
        })
        .catch(err => {
          console.error(err);
        })

    }
  }

  handleForm = (data) => {
    console.log('insert', data)
    if (!data._id) {
      //insert record
      //todo optimistic  update
      //todo markdown
      axios.post(this.props.url + 'insert/kunden', data)
        .then(res => {
          //console.log(res.data.ops[0])
          this.setState((prevState) => {
            let newList = prevState.data
            newList.push(res.data.ops[0])
            return { data: newList }
          })
          this.setState({ selectedId: '' })
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      //update record
      console.log('update record', data)

      axios.put(this.props.url + 'update/kunden/' + data._id , data)
        .then(res => {
          console.log(res.data)
          this.setState({ selectedId: '' })
          this.setState((prevState) => {
            let newList = prevState.data.map((item) => {
              if (item._id !== data._id) {
                return item
              } else {
                return data
              }
            })
            return { data: newList }
          })
        })
        .catch(err => {
          console.error(err);
        });

    }
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
    <ul className="list-group">
      {props.list.map(l => {
        return (
          <ListItem
            key={l._id}
            item={l}
            selectedId={props.selectedId}
            handleListItemClicked={props.handleListItemClicked}
            handleListItemDelete={props.handleListItemDelete}
            handleForm={props.handleForm}
          />
        )
      }
      )}
    </ul>
    );
  }
}

 <Liste list={this.state.data} selectedId={this.state.selectedId} handleListItemClicked={this.handleListItemClicked} handleListItemDelete={this.handleListItemDelete} handleForm={this.handleForm} />


const ListItem = (props) => {
  const showItems = () => {
    if (props.selectedId === props.item._id)
      return (
        <div>
          <span>
            <span className="btn btn-danger" onClick={(e) => { props.handleListItemDelete(props.item._id) }}> <i className="fa fa-trash" /> </span>
            <span className="btn" onClick={(e) => { props.handleListItemClicked(0) }}> <i className="fa fa-times" /> </span>
          </span>
        </div>
      )
  }


export default Liste;