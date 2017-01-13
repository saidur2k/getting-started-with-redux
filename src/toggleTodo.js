const toggleTodo = (todo) => {
  return Object.assign({}, todo, {isCompleted: !todo.isCompleted})
}

export { toggleTodo }
