import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'
import { VisibleTodoList } from './VisibleTodoList'
import { FilterLink } from './FilterLink'
import { AddTodo } from './AddTodo'

const todoApp = combineReducers({todos, visibilityFilter})

const Footer = () => {
 return (
   <p>
     Show:
     { ' ' }
     <FilterLink filter='SHOW_ALL'>All</FilterLink>
     { ' ' }
     <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
     { ' ' }
     <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
   </p>
 )
}

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
