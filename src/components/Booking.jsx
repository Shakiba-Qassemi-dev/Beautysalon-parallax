import React from 'react'

export default function Booking() {
  return (
   <>
   <form className='w-[50%] h-[400px] mx-auto  *:border-2 *:border-gray-400 flex flex-col'>
    <input type='text' placeholder='Name'/>
    <input type='number' placeholder='Phone'/>
    <input type='email' placeholder='Email'/>
    <input type='date' placeholder='Appt date'/>
    <textarea className='w-[70%] h-[300px]' placeholder='Message'/>
    <button>Request Callback</button>
   </form>
   </>
  )
}
