import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'

const todoApp = combineReducers({todos, visibilityFilter})
const store = createStore(todoApp)
let nextTodoId = 0


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

const AddTodo = () => {
  let input
  return (
    <div>
      <input ref={(node) => input = node} />
      <button
        onClick={
          () => {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text: input.value
            })
            input.value = ''
          }
        }>
        Add Todo
      </button>
    </div>
  )
}

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={ (e) => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </a>
  )
}

class FilterLink extends React.Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const props = this.props
    const state = store.getState()

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={ () =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    )
  }
}

const Footer = () => {
 return (
   <p>
     Show:
     { ' '}
     <FilterLink filter='SHOW_ALL'>All</FilterLink>
     { ' '}
     <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
     { ' '}
     <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
   </p>
 )
}

class VisibleTodoList extends React.Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const props = this.props
    const state = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) => store.dispatch({
          type: 'TOGGLE_TODO',
          id: id
        })}
      />
    )
  }
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
  <TodoApp {...store.getState()} />,
  document.getElementById('root')
)
