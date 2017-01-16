import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'

const todoApp = combineReducers({todos, visibilityFilter})


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

let nextTodoId = 0
let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={(node) => input = node} />
      <button
        onClick={
          () => {
            dispatch({
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
AddTodo = connect()(AddTodo)

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
    const {store}= this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const props = this.props
    const {store} = this.context
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

FilterLink.contextTypes = {
  store: React.PropTypes.object
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

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch({
      type: 'TOGGLE_TODO',
      id: id
    })
  }
}
const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
  )(TodoList)

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
