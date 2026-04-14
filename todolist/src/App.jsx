import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const [color, setColor]=useState("gray")
 

  return (
    <>
    <div className=" flex w-full h-screen duration-200"
     style={{backgroundColor:color}}
     >
      <div className="flex flex-col h-100 ml-110 relative mt-30 w-130 mx-w-md mx-auto shadow-md
       rounded-md px-4 py-3 my-8 bg-gray-200" style={{overflow:'auto'}}>
        <div className="flex md:flex-wrap justify-between w-full">
          <h2 className="text-2xl font-serif mb-4"> Daily Task</h2>
          <h1 icon className=""> &#128197; Date</h1>
        </div>
        <div>
          <div className="flex"> 
            <input className="ring-1 ring-blue-600 w-90 rounded-md h-10 p-2" type="text" placeholder='Add a new task...' />
          <button className="bg-blue-600 text-white rounded-lg h-10 p-1 ml-3 w-30
          shadow-lg shadow-blue-500
          ">+ Add a Task</button>
          </div>
          <button></button>
        </div>
        <div className="flex justify-between w-full">
          <h2 className="text-base text-slate-800 mb-4 mt-2">Total Tasks:</h2>
          <div className="flex mt-0 gap-2">
            <button className="rounded-4xl ring-1 p-3 px-5 text-sm">All</button>
          <button  className="rounded-4xl ring-1 p-3 px-5 text-sm">Active</button>
          <button className="rounded-4xl ring-1 p-3 px-5 text-sm">Completed</button>
          </div>
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-3 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>

        <div className="w-120 gap-2 bg-amber-300 mt-1 h-10 flex items-center p-2 rounded-md">
          <input type="checkbox" />
          <input className='outline-none w-75' type="text" name="" id="" />
        </div>
        
       </div>
       
       
     </div>
      
    </>
  )
}

export default App
