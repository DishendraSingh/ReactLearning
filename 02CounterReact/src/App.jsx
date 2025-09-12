import { useState } from 'react'

import './App.css'


function App() {
let negativeVale =0

let [counter, setCounter] = useState(5);

function addValue() {
  setCounter(prev => {
    if (prev >= 10) {
      alert("Value cannot be greater than 10");  // or handle error
      return prev; // don’t update further
    }
    return prev + 1;
  });

  setCounter(prev => (prev >= 10 ? prev : prev + 1));//  this is the interview question, how we can increase value directly by dding in this way
  setCounter(prev => (prev >= 10 ? prev : prev + 1));
  setCounter(prev => (prev >= 10 ? prev : prev + 1));
}

function minusValue(){
  console.log("CLicked Minus",counter)
  counter-=1
  if(counter == 0)
  {
   negativeVale=`value can not be less then zero ${negativeVale}`
   setCounter(negativeVale)
  }
  else
  setCounter(counter)
}
  return (
    <>
     <h1>Learning React with Chai or Code</h1>
     <h2>Learing Hooks in this project { counter}</h2>
     <br></br>
     <button onClick={addValue}>Increse Value   { counter}</button>
     <br/>
     <button onClick={minusValue}>Decrease Value  { counter}</button>

     <p>Fotter: { counter}</p>
    </> 
  )
}

export default App
