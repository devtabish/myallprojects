import {  useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [list, addlist] = useState([])
  const handleInput=()=>{
    if(name!==""){
      addlist([...list, name])
      setName(" ");
    }
  }
  const deletItems= useCallback((index)=>{
    addlist((newList)=>newList.filter((_, i)=>i!==index));
    [list]
  })
  
    
  
 
  

  return (
    <>
   <div>
    <h2>My simple List</h2>
    <input type="text"
     placeholder='type your name here' onChange={(e)=> setName(e.target.value)} value={name} />
    <button onClick={handleInput}>Add to List</button>
    <ul>
      {list.map((item, index)=>
      (
        <li key={index}>
          {item}
         <button onClick={()=> deletItems (index)}> Delete from list</button></li>
       
      )
      )}
    </ul>
    
   </div>
      
    </>
  )
}

export default App


//  const increment= ()=>{
//     if(count>=10){
//       return;
//     }
//      setCount(count+1)
//   }
//   const decrement= ()=>{
//     if(count<=1){
//       return;
//     }
//      setCount(count-1)
//   }

//  <div className="flex flex-wrap gap-4 justify-center items-center mt-5 mx-w-auto h-auto bg-amber-200">
//         <h1>{count}</h1>
//         <button className='w-10 h-5 bg-amber-600' onClick={increment} >Add +1</button>
        
//         <button className='w-10 h-5 bg-amber-600' onClick={decrement} >Add -1</button>
      
//       </div>
//       <div className='w-30 h-8 p-4'>
        
//         <button onClick={increment} className='bg-amber-100'>click me again to increment</button>
//       </div>

//  const togglehandle= ()=>{
//     setdarkmode(!darkmode)
//   }
//   const pagestyle ={
//     backgroundColor: darkmode === true ? "black" : "white",
//     color: darkmode === true ? "white" : "black",
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems:'center',
//     justifyContent : 'center',
//     transition: '0.5s'
//   }
//   const btnstyle={
//     backgroundColor: darkmode===true? 'violet':'cyan',
//     color:darkmode===true? 'white':'black'
//   }
    
{/* <div style={pagestyle}>
      <button style={btnstyle} className=' text-black' onClick={togglehandle}>
        switch to {darkmode===true?'Light':'Dark'}
      </button>
      <h1>{darkmode===true?"Dark Mode On": "Dark Mode Off"}</h1>
      
    </div> */}

  //   const increase = ()=>{
  //   if(setfont>=30){
  //     return;
  //   }
  //   setfontsize(setfont + 5);
  // }
    
  
  // const decrease =()=>{
  //   if(setfont<=15){
  //     return;
  //   }
  //   setfontsize(setfont - 5);
  // }

  //  <div className='flex items-center justify-center' >
  //     <p style={{fontSize:setfont + "px"}}> change my size </p>
  //     <button onClick={increase}>Click to Increase</button>
  //     <button onClick={decrease}>Click to Decrease</button>
  //   </div>