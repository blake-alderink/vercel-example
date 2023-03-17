import React, { useState } from 'react'
import './App.css';

function App() {

  const [ name, setName ] = useState('Blake Alderink')

  const changeHandler = e => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <h1>adding a title here for the different branch</h1>
      <h3>adding a subtitle here, which branch?</h3>
      <h6>{name}</h6>
      <form>
        <label>Name</label>
        <input value={name} type='text' onChange={changeHandler}/>
        
      </form>
     
    </div>
  );
}

export default App;
