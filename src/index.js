// React, ReactDOM, Redux librarries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { todoApp } from './reducers/index.js'
import { TodoApp } from './TodoApp'
import { loadState , saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(todoApp, persistedState)
store.subscribe( throttle(() => {
  saveState(store.getState())
}, 1000))

// Render App output
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
