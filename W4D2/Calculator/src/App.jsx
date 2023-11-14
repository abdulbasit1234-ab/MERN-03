import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  return (
    <>
    <h1 className='bg-orange-400 font-thin'>Calculator</h1>
      <div className='bg-gray-600 h-80 w-80 flex justify-center justify-items-center'>
        <div className='bg-orange-500 h-72 w-72 mt-3.5'>
          <input type="text" name="input-1" placeholder='Enter First Number' className='m-4 w-56 h-10 rounded-md' value={num1} onChange={(e)=>{setNum1(e.target.value)}}/>
          <input type="text" name="input-1" placeholder='Enter First Number' className='m-4 w-56 h-10 rounded-md' value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
          <br />
          <button className='m-2' onClick={()=>{setResult(Number(num1) + Number(num2))}}>+</button>
          <button className='m-2' onClick={()=>{setResult(Number(num1) - Number(num2))}}>-</button>
          <button className='m-2' onClick={()=>{setResult(Number(num1) * Number(num2))}}>*</button>
          <button className='m-2' onClick={()=>{setResult(Number(num1) / Number(num2))}}>/</button>
          <textarea name="text" id="textArea" cols="30" rows="30" className='h-11 m-6 rounded-md' placeholder='Result' value={result} />
        </div>
      </div>
    </>
  )
}

export default App
