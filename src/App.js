import React, { useState } from 'react'
import './App.css';

function App() {

  const [ name, setName ] = useState('Blake Alderink')

  const changeHandler = e => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <form>
        <label>Name</label>
        <input value={name} type='text' onChange={changeHandler}/>
        
      </form>
     
    </div>
  );
}

export default App;
