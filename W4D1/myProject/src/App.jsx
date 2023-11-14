import './App.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {
  const [fname , setfName] = useState("");
  const [lname , setlName] = useState("");
  const [email , setemail] = useState("");
  const [contact , setContact] = useState("");
  const [message , setMessage] = useState("");

  const Submit = (e) =>
  {
    e.preventDefault();
    Swal.fire(
      "Form Sumitted", `First Name:${fname} Last Name:${lname} Email:${email} Contact:${contact} Message:${message}`
    )
  }

  return (
    <>
      <div className='border-black h-52 w-56 bg-slate-800 mar light'>
        <h1 className='text-center'>Contact Us</h1>
        <form onSubmit={Submit} action="submit">
        <input type="text" onChange={(e)=>{setfName(e.target.value)}} name="fname" placeholder="First Name" required="name" className='m-1 p-0 h-6 outline'/>
        <br />
        <input type="text" onChange={(e)=>{setlName(e.target.value)}} name="lname" placeholder="Last Name" required="lname" className='m-1 p-0 h-6 outline'/>
        <br />
        <input type="email" onChange={(e)=>{setemail(e.target.value)}} name="email" placeholder="Email" required="email" className='m-1 p-0 h-6 w- outline'/>
        <br />
        <input type="number" onChange={(e)=>{setContact(e.target.value)}} name="number" placeholder="Contact" required="number" className='outline m-1 p-0 h-6'/>
        <br />
        <input type="text" onChange={(e)=>{setMessage(e.target.value)}} name="message" placeholder="Message" required="message" id='message' className='outline m-1 p-0 h-6'/>
        <br />
        <button className='outline m-1 p-0 h-6 bg-red-400'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App