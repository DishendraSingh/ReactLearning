import { useState, useCallback ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
   const passwordRef=useRef(null);
  // ✅ Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "+-*/=%^&|~!?.,;:'()[]{}<>"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // ✅ Copy password
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
//alert("Password copied!")
  })

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700">
        <h6 className="text-3xl font-bold underline bg-amber-500 text-black p-4 rounded-2xl text-center">
          Password Generator
        </h6>

        {/* Password Input + Copy Button */}
        <div className="flex  items-center gap-2 shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            value={password}
            className="outline-none w-full px-3 py-1 text-black rounded-lg"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Copy
          </button>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center">
          <button
            onClick={passwordGenerator}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Generate Password
          </button>
        </div>

        <div  className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}>
              </input>
              <label>lenght : {length}</label>
          </div>
           <div className="flex items-center gap-x-1">

            <input type="checkBox"
            defaultChecked={numberAllowed}
            id="numberAllowedId"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            ></input>
            <label htmlFor='numberAllowedId'>Number</label>
           </div>

           <div className="flex items-center gap-x-1">

            <input type="checkBox"
            defaultChecked={charAllowed}
            id="charAllowedId"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            ></input>
            <label htmlFor='charAllowedId'>Character</label>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
