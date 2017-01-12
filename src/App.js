import React, { Component } from 'react';
import {counter} from './reducer'
import { createStore } from 'redux'

const store = createStore(counter)

store.subscribe(() => {
  document.body.innerText = store.getState()
})

document.addEventListener( 'click', () => {
  store.dispatch({ type: 'INCREMENT'})
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default App;
