const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export default toggleTodo
