import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Admin from './Admin'


const App = (props) => {
  return (
    <Router>
      <div classname="main">
        <div>
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </div>
      </div>
    </Router>
  )
}


export default App