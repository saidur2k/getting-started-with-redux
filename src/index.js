import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'

const todoApp = combineReducers({todos, visibilityFilter})
const store = createStore(todoApp)
let nextTodoId = 0

const FilterLink = ({filter, currentFilter, children}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={ e => {
          e.preventDefault()
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      }
      >
        {children}
      </a>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed === true)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed === true)
  }
}

const Todo = ({onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  )
}

const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
            />
          )
        })
      }
    </ul>
  )
}


class TodoApp extends React.Component {
  render () {
    const { todos, visibilityFilter } = this.props
    const visibleTodos = getVisibleTodos(
                                      todos,
                                      visibilityFilter
                                    )
    return (
      <div>
        <input ref={(node) => this.input = node} />
        <button
          onClick={
            () => {
              store.dispatch({
                type: 'ADD_TODO',
                id: nextTodoId++,
                text: this.input.value
              })
              this.input.value = ''
            }
          }>
          Add Todo
        </button>
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
          })}
        />
        <p>
          Show:
          { ' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}>
            All
          </FilterLink>
          { ' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          { ' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}>
            Completed
          </FilterLink>

        </p>
      </div>
    )
  }
}

const render = () => {
    ReactDOM.render(
      <TodoApp {...store.getState()} />,
      document.getElementById('root')
    )
}

store.subscribe(render)

render()
