import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-select/dist/react-select.css';

import './components/App.css'
import 'codemirror/lib/codemirror.css'

ReactDOM.render(

  <App url='http://localhost:3001/api/' />,
  document.getElementById('root')

)
