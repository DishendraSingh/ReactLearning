import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200" style={{ backgroundColor: color }}>


        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-400 px-0  py-2  rounded-4xl">
 <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("blue")}
      >
        Make Blue
      </button>
      <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("red")}
      >
        Make Red
      </button>
       <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("green")}
      >
        Make Green
      </button>
       <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("white")}
      >
        Make white
      </button>
       <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("yellow")}
      >
        Make Yellow
      </button>
       <button
        className="m-4 px-4 py-2 bg-white rounded"
        onClick={() => setColor("aqua")}
      >
        Make Aqua
      </button>
</div>
        </div>
     
    </div>
  )
}

export default App
