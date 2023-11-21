import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LiaInstagram } from "react-icons/lia";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-orange-300 w-[100%] h-auto flex p-0 lg:flex-row sm:flex-col'>
        <div className='bg-red-500 w-[98%] h-14 m-2'>1</div>
        <div className='bg-red-500 w-[98%] h-14 m-2'>2</div>
      </div>
      <div className='bg-orange-300 w-[100%] h-32 flex p-3 my-2'>1</div>
      <div className='bg-orange-300 w-[100%] h-40 flex p-0 lg:flex-row sm:flex-col xl:flex-row md:flex-row 2xl:flex-row'>
        <div className='bg-red-500 w-[98%] h-36 m-2'>1</div>
        <div className='bg-red-500 w-[98%] h-36 m-2'>2</div>
        <div className='bg-red-500 w-[98%] h-36 m-2'>2</div>
      </div>
      <div className='bg-orange-300 w-[100%] h-24 flex p-0 my-2'>
        <div className='bg-red-500 w-[24%] h-20 m-2'>1</div>
        <div className='bg-red-500 w-[24%] h-20 m-2'>2</div>
        <div className='bg-red-500 w-[24%] h-20 m-2'>2</div>
        <div className='bg-red-500 w-[24%] h-20 m-2'>2</div>
      </div>
    </>
  )
}

export default App
