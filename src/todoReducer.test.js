import {todoReducer} from './todoReducer'

it('can reduce [add] to todoList', () => {
  const stateBefore = []
  const action = {type: 'ADD_TODO', id: 0, text: 'Learn'}
  const stateAfter = [{id:0, text: 'Learn', completed: false}]

  expect(todoReducer(stateBefore, action)).toEqual(stateAfter)
})

it('can reduce [toggle] to todoList', () => {
  const stateBefore = [
    {id:0, text: 'Learn', completed: false},
    {id:1, text: 'Redux', completed: false}
  ]

  const action = {type: 'TOGGLE_TODO', id: 1}

  const stateAfter = [
    {id:0, text: 'Learn', completed: false},
    {id:1, text: 'Redux', completed: true}
  ]

  expect(todoReducer(stateBefore, action)).toEqual(stateAfter)
})
