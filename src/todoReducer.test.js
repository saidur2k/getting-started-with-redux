import {todoReducer} from './todoReducer'

it('can reduce todo', () => {
  const stateBefore = []
  const action = {type: 'ADD_TODO', id: 0, text: 'Learn'}
  const stateAfter = [{id:0, text: 'Learn', completed: false}]

  expect(todoReducer(stateBefore, action)).toEqual(stateAfter)
})

it('can reduce todo another array', () => {
  const stateBefore = [{id:0, text: 'Learn', completed: false}]
  const action = {type: 'ADD_TODO', id: 1, text: 'Redux'}
  const stateAfter = [
    {id:0, text: 'Learn', completed: false},
    {id:1, text: 'Redux', completed: false}
  ]

  expect(todoReducer(stateBefore, action)).toEqual(stateAfter)
})
