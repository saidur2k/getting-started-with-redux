import React from 'react'
import {todoReducer, visibilityFilter} from './todoReducer'
import { createStore /*, combineReducers */} from 'redux'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const combineReducers = (reducers) => {
  return (state = {} , action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {}
    )
  }
}

const todoApp = combineReducers({todoReducer, visibilityFilter})
const store = createStore(todoApp)

console.log('Initial State')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'go home'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching another ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 2,
  text: 'go drink'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching again another ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 3,
  text: 'go again'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
})
console.log(store.getState())
console.log('-------------')
console.log('Dispatching SET_VISIBILITY_FILTER')
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
console.log(store.getState())

export { Counter }
