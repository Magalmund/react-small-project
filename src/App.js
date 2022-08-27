import './index.scss';
import React from "react";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)

    function increment () {
        setCounter(counter + 1)
    }
    function decrement () {
      setCounter(counter - 1)
    }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={decrement} className="minus">- Минус</button>
        <button onClick={increment} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
