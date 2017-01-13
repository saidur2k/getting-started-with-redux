import { toggleTodo } from './toggleTodo'
import immu from 'immu'

it('can toggle todo', () => {
  let beforeTodoObject = immu({
    id: 1,
    title: 'Drink',
    isCompleted: false,
    additionalInfo: 'more info here'
  })

  let afterTodoObject = {
    id: 1,
    title: 'Drink',
    isCompleted: true,
    additionalInfo: 'more info here'
  }

  expect(toggleTodo(beforeTodoObject)).toEqual(afterTodoObject)

})
