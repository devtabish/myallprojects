import { useState, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password, setPassword]=useState("");
  const [uppercase, uppercaseAllowed]=useState(false);

  const passwordRef = useRef(null)
  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str="abcdefghijklmnopqrstuvwxyz"
if(numAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*_-~`"
if(uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let i=1;i<=length;i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
  
}
// if(uppercaseAllowed){
//   str=str.toUpperCase()
  
// }
// else{
//   pass=""
// }


setPassword(pass)


  }, [length, numAllowed,charAllowed, setPassword, uppercase]) 

 const copypswrdtocb =useCallback(()=>{
  passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]
)

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed,charAllowed, passwordGenerator, uppercase])

  


  return (
    <>
      <div className="ml-110 mt-30  w-130 mx-w-md mx-auto shadow-md
       rounded-lg px-4 py-3 my-8 text-slate-600 bg-gray-800">
        <h1 className="text-white text-center uppercase my-3">Password Generator</h1>
       <div className="flex bg-slate-100 shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-2"
         placeholder="Password" readOnly ref={passwordRef} />
         <p style={{ color: password.length > 10 ? 'green' : 'red' }}>
  {password.length > 30   ? "Extra Strong" : password.length >=8?"Strong Password": "Weak Password" }
   {/* {password.length> 30  ? 'Extra Strong':''} */}
</p>
         <button onClick={copypswrdtocb}
          className="cursor-pointer outline-none bg-blue-700 text-white shrink-0 px-3 py-0.5 rounded-l-md">Copy</button>
       </div>

       <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length}
          className="hover:cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={(e)=>{setnumAllowed((prev)=>!prev);}}
          />
          <label className="text-white" htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={(e)=>{setcharAllowed((prev)=>!prev);}}
          />
          <label className="text-white" htmlFor="characterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={(e)=>{uppercaseAllowed((prev)=>!prev);}}
          />
          <label className="text-white" htmlFor="characterInput">Upper Case</label>
          </div>
          
       </div>
       </div>
    </>
  )
}

export default App
