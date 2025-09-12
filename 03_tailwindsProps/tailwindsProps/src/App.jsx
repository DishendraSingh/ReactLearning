import { useState } from 'react'
import './App.css'
import "tailwindcss";
import Card from './component/Card';
//import Image from "next/image";

function App(props) {

  console.log(props);

  const dish={
    name:"Dishendra",
    age:21,
    Add:"mumbai"
  }
 let myArr=[1,2,3]

  return (
    <>
     <h1 className="text-3xl font-bold underline bg-amber-500 text-black p-4 rounded-2xl">
    Hello world!
  </h1>

<Card Username="Code with Dishendra" obj={dish} myArr={myArr}/>
<Card Username={dish.name}/>


  
  
    </>
  )
}

export default App
