import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

import { globalStyles } from './UI/Stitches/index'

ReactDOM.render(
  <React.StrictMode>
    {globalStyles()}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
