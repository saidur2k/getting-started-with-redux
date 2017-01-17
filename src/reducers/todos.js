import todo from './todo'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map((todo) => todo(todo, action))
    default:
      return state
  }
}

export default todos
