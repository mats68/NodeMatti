import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
//import 'react-tabs/dist/react-tabs.css';

ReactDOM.render(

  <App url='http://localhost:3001/api/' />,
  document.getElementById('root')

)
