import { connect } from 'react-redux'
import { TodoList } from './TodoList'

import toggleTodo from './actions/toggleTodo'
import getVisibleTodos from './actions/getVisibleTodos'

const mapStateToTodoListProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
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

export { VisibleTodoList }
