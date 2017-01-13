const todoReducer = (state, action) => {
let newState = []

  switch (action.type) {
    case 'ADD_TODO':
      const {id,text} = action
      newState = [...state, {id,text,completed:false}]
      return newState

    default:
      return state
  }

}

export { todoReducer }
