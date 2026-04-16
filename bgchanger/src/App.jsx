import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor]=useState('olive')
  const [selectedColor, setSelectedColor]=useState("olive")

  const isSelected = (color)=> selectedColor===color
  
  

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2
           shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button id="10" onClick={()=> {setColor("red"); setSelectedColor("red")}} 
            className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected('red')?"olive":"red", 
            color:isSelected("red")?"black":"white"}}>Red</button>

            <button id="1" onClick={()=> {setColor("green"); setSelectedColor("green"); }} 
            className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("green")?"white":"green", 
            color:isSelected("green")?"black":"white"}}>Green</button>

            <button id="2" onClick={()=> {setColor("blue"); setSelectedColor("blue")}}
             className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("blue")?"white":"blue",
             color:isSelected("blue")?"black":"white"}}>Blue </button>

            <button id="3" onClick={()=> {setColor("olive"); setSelectedColor("olive")}} 
            className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("olive")?"white":"olive", 
            color:isSelected("olive")?"black":"white"}}>Olive</button>

            <button id="4" onClick={()=> {setColor("gray"); setSelectedColor("gray")}}
             className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("gray")?"white":"gray", 
            color:isSelected("gray")?"black":"white"}}>Gray</button>

            <button id="5" onClick={()=> {setColor("yellow"); setSelectedColor("yellow")}}
             className=" text-slate-500 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("yellow")?"white":"yellow", 
            color:isSelected("yellow")?"black":"white"}}>Yellow </button>

            <button id="6" onClick={()=> {setColor("pink"), setSelectedColor("pink")}} 
            className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("pink")?"white":"pink", 
            color:isSelected("pink")?"black":"white"}}>Pink</button>

            <button id="7" onClick={()=> {setColor("purple"); setSelectedColor("purple")}}
             className="text-slate-200 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("purple")?"white":"purple",
            color:isSelected("purple")?"black":"white"}}>Purple</button>

            <button id="8" onClick={()=> {setColor("lavender"); setSelectedColor("lavender")}}
             className="text-slate-500 outline-none rounded-full px-4 shadow-lg py-1" 
            style={{backgroundColor:isSelected("lavender")?"white":"lavender", 
            color:isSelected("lavender")?"black":"white"}}>Lavender</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
