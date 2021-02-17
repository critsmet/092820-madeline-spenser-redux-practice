import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, addNote } from './redux/actionCreators'

function App(props){

  function handleClick() {
    props.incrementWithinDispatch()
  }

  function handleSubmit(event){
    event.preventDefault()
    props.addNoteWithinDispatch(event.target.note.value)
    event.target.reset()
  }

  return(
    <div className="App">
      <div id="counter-container">
        <p>Counter: {props.thisIsTheCounterValueFromState}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div id="notes-container">
        <form id="note-form" onSubmit={handleSubmit}>
          <input type="text" name="note" placeholder="Write note"/>
          <input type="submit" value="Submit that note!"/>
        </form>
        <h2>Notes go here:</h2>
        <ul>
          {props.notesFromState.map((note, index) => <li key={note.split(" ")[0] + `${index}`}>{note}</li>)}
        </ul>
      </div>
    </div>
  )
}

function mSTP(state){
  return {
    thisIsTheCounterValueFromState: state.counter,
    notesFromState: state.notes
  }
}

function mDTP(dispatch){
  return {
    incrementWithinDispatch: () => dispatch(increment()),
    addNoteWithinDispatch: (note) => dispatch(addNote(note))
  }
}

//connect connects to the store that we passed to the provider as a prop
export default connect(mSTP, mDTP)(App)
