const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {type,...newTodo} = action
      return {...newTodo, completed:false}
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {...state, completed: !state.completed}
    default:
      return state
  }
}

export default todo
