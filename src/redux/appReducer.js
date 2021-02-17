export function appReducer(state = {counter: 0, notes: []}, action){
  switch(action.type){
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'ADD_NOTE':
      let newState = {...state, notes: [...state.notes, action.payload]}
      console.log("STATE CHANGED", newState)
      return newState;
    default:
      return state;
  }
}
