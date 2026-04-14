import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='font-bold '>hello world</h1>
      <button className='bg-blue-700 rounded-md p-2 w-30 text-slate-200 cursor-pointer'>Hello</button>
      <Card username="Chai or code" btnText='Chai or Code' />
     
    </>
  )
}

export default App
