const todoReducer = (state, action) => {
let newState = []

  switch (action.type) {
    case 'ADD_TODO':
      const {type,...newTodo} = action
      return [...state, {...newTodo,completed:false}]
    case 'TOGGLE_TODO':
      const newState = state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return newState
    default:
      return state
  }

}

export { todoReducer }
