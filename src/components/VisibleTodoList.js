import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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

const mapStateToTodoListProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all')
})

const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
  )(TodoList))

export default VisibleTodoList
