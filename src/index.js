// React, ReactDOM, Redux librarries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { todoApp } from './reducers/index.js'
import { TodoApp } from './TodoApp'

// Render App output
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
