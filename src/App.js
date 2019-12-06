import React, { useReducer } from 'react';
import './App.css';

import tasksReducer from './reducers/tasksReducer';

function App() {

  const [state, dispatch] = useReducer(tasksReducer, []);

  return (
    <div className="App">
      <h1 onClick={() => dispatch({ type: 'add' })}>Dashboard</h1>


      {state.map(item => <p key={item.id}>{item.id}</p>)}
    </div>
  );
}

export default App;
