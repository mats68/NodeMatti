import React, { Component } from 'react'
import axios from 'axios'
import KundenForm from './KundenForm'

class App extends Component {
   constructor(props) {
     super(props)
     this.state = {data: []} 

   }
   insertKunde = (data) => {
      axios.post(this.props.url + 'insert/kunden', data)
      .then(res => {  
        this.setState((prevState) => {  
          let newList = prevState.data
          newList.push(data) 
          return {data: newList}
        })
      })
      .catch(err => {
        console.error(err);
      });      
   }

   loadCommentsFromServer = () => {
    axios.get(this.props.url + 'kunden' )
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
        <Liste list={this.state.data}/>
        <KundenForm insertKunde={this.insertKunde} />
      </div>
    )
  }
}



const Liste = (props) => {

  return (
     <ul>
        {props.list.map(l => <li key={l._id}>{l.name}</li>)} 
     </ul>
     

  )
}


export default App