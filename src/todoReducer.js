import { individualTodoReducer } from './individualTodoReducer'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, individualTodoReducer(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map((todo) => individualTodoReducer(todo, action))
    default:
      return state
  }
}

export { todoReducer }
