import { useState } from 'react'

import './App.css'


function App() {
let negativeVale =0

let [counter,setCounter] = useState(5)
function addValue(){
  console.log("Clicked",counter)
  counter+=1
  if(counter == 10)
  {
   negativeVale=`value can not be greter then 10 ${negativeVale}`
   setCounter(negativeVale)
  }
  else
  setCounter(counter)
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
