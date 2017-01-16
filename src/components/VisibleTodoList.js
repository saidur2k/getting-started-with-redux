import { connect } from 'react-redux'
import TodoList from './TodoList'
import toggleTodo from '../actions/toggleTodo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(todo => todo.completed === true)
    case 'active':
      return todos.filter(todo => !todo.completed === true)
    default:
      throw new Error(`Unknown path: ${filter}`)
  }
}

const mapStateToTodoListProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
  )(TodoList)

export default VisibleTodoList
