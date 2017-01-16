// React, ReactDOM, Redux librarries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { todoApp } from './reducers/index.js'
import { TodoApp } from './TodoApp'

const persistedState = /* */

// Render App output
ReactDOM.render(
  <Provider store={createStore(todoApp, persistedState)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
