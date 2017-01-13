import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { todoReducer as todos } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'

const todoApp = combineReducers({todos, visibilityFilter})
const store = createStore(todoApp)
let nextTodoId = 0

class TodoApp extends React.Component {
  render () {
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
        <ul>
          {
            this.props.todos.map( (todo) => {
              return (
                <li
                  key={todo.id}
                  onClick={() => {
                    store.dispatch({
                      type: 'TOGGLE_TODO',
                      id: todo.id
                    })
                  }}
                  style={{
                      textDecoration:
                        todo.completed ? 'line-through' : 'none'
                    }}
                >
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const render = () => {
    ReactDOM.render(
      <TodoApp todos={store.getState().todos} />,
      document.getElementById('root')
    )
}

store.subscribe(render)

render()
