import { addCounter, removeCounter, incrementCounter } from './addCounter'
import immu from 'immu'

const freeze = (o) => { deepFreeze(o)() }

it ('can add counter', () => {
  const listBefore = immu([])
  const listAfter = [0]

  expect(addCounter(listBefore)).toEqual(listAfter)
})

it ('can remove counter', () => {
  const listBefore = immu([0, 10, 20])
  const listAfter = [0, 20]

  expect(removeCounter(listBefore, 1)).toEqual(listAfter)

})

it ('can increment counter', () => {
  const listBefore = immu([0, 10, 20])
  const listAfter = [0, 11, 20]

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter)
})
