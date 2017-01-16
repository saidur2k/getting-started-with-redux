// React, ReactDOM, Redux librarries
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import configureStore from './configureStore'

const store = configureStore()
// Render App output
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
