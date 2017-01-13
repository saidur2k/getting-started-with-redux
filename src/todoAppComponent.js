

console.log('Initial State')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'go home'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching another ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 2,
  text: 'go drink'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching again another ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 3,
  text: 'go again'
})
console.log('Current State:')
console.log(store.getState())
console.log('-------------')
console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
})
console.log(store.getState())
console.log('-------------')
console.log('Dispatching SET_VISIBILITY_FILTER')
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
console.log(store.getState())
