// React, ReactDOM, Redux librarries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

// Reducers
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'

// Components
import { TodoApp } from './TodoApp'

// Combine all Reducers
const todoApp = combineReducers({todos, visibilityFilter})

// Render App output
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
