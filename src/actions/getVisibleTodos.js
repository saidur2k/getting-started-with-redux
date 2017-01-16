const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed === true)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed === true)
    default:
      return todos
  }
}

export default getVisibleTodos
