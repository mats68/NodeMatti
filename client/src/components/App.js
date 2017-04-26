import React, { Component } from 'react'
import axios from 'axios'
import KundenForm from './KundenForm'

class App extends Component {
   constructor(props) {
     super(props)
     this.state = {data: []} 

   }
   insertKunde = (data) => {
       /hier mach body 
      console.log(data)
      axios.post(this.props.url + 'insert/kunden', data)
      .catch(err => {
        console.error(err);
        //this.setState({ data: comments });
      });      
   }

   loadCommentsFromServer = () => {
     //console.log('was denn', this)
    axios.get(this.props.url + 'kunden' )
      .then(res => {
        console.log(res)
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
        {props.list.map(l => <li>{l.name}</li>)} 
     </ul>
     

  )
}


export default App