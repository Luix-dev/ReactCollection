import {React, useState } from 'react';
import test from './test.jsx';
import "./App.css";
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
    window.localStorage.setItem('state', JSON.stringify(counter));
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
    window.localStorage.setItem('state', JSON.stringify(counter));
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
    window.localStorage.setItem('state', JSON.stringify(counter));
  }
 
  return (
    <div className="counter">
      <h1>Ecetera</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
      <br />
      
    </div>
  );
}