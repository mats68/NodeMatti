import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(

  <App url='http://localhost:3001/api/' />,
  document.getElementById('root')

)
