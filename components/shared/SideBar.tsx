"use client"
import React, { useState } from 'react'
import AddTodo from './AddTodo'

const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-white py-3 top-0 left-0 right-0 shadow-md'>
      <button className='m-2 text-center' onClick={() => setOpen(true)}>
        Nueva tarea
      </button>

      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-cyan-600 min-h-screen fixed top-0 right-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3 flex`}>
          <AddTodo changeOpen={ setOpen } />
         
        </div>
      </div>
    </div>
  )
}

export default SideBar