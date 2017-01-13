const todoAppReducer = (state = {}, action) => {
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

export { todoAppReducer }
