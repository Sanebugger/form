import { useState } from 'react';
import './App.css';
// import Form from './Form';
function App() {
  const [name, setName] = useState("");
  const [storename, setstorename] = useState("");

  const handleInput = (e) => {
    console.log(e);
    setstorename(e.target.value);
  }
  const handleSubmit = () => {
    setName(storename);
  }

  return (
    <div className="App">
      
      <div>
        <h1>Hello {name}</h1>
        <input type="text" placeholder='enter your name' onChange={handleInput} value={storename} />
        <button onClick={handleSubmit}>click me</button>
      </div>
    </div>

  );
}

export default App;
