import { useState } from 'react'
import {Input} from './components/Index'
import currencyInfo from './hooks/currencyInfo'
import useCurrencyInfo from './hooks/currencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom]= useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedamount, setConvertedamount]=useState(0)
  const currencyInfo = useCurrencyInfo(from) /* using hook from 'from' bcoz we want conversion from this state*/
  const options = Object.keys(currencyInfo)
  const swap = ()=> {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }

  const convert = ()=> {
    setConvertedamount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')"}}>

        <div className="w-full">
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=> {e.preventDefault()
            convert()
          }}>
            <div className='w-full  mb-1'>
              <Input label="from"
              amount={amount}
              currencyoption={options}
              Oncurrencychange={(currency) => setFrom(currency) }
              onAmountchange={(amount)=>setAmount(amount)}
                selectcurrency={from}></Input>
            </div>
            <div className='relative ml-40 w-full md:w-1/2 h-0.5'>
              <button type='button' className='absolute left-1/2-translate-x-1/2-translate-y-1/2
              border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>swap</button>
            </div>
            <div className='w-full mt-1 mb-4  '>
              <Input label="To"
              amount ={convertedamount}
              currencyoption={options}
              Oncurrencychange={(currency)=> setTo(currency)}
              selectcurrency={to}
              amountdisable></Input>
            </div>
            <button type='submit'
            className='w-full bg-blue-600  text-white px-4 py-3 rounded-lg'>Convert</button>

          </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
