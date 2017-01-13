import React from 'react'
import { combineReducers } from './combineReducers'
import { todoReducer } from './todoReducer'
import { visibilityFilter } from './visibilityFilter'
import { createStore /*, combineReducers */} from 'redux'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

export { Counter }
