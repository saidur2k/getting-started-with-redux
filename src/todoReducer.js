const individualTodoReducer = (state, action) => {
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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
    }
}

const todoApp = (state = {}, action) => {
  return {
    todos: todoReducer(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
  }
}


export { todoApp }
