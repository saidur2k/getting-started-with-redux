import React from 'react'

// class Counter extends React.Component {
//   render () {
//     return <h1>Hello World</h1>
//   }
// }

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

export { Counter }
