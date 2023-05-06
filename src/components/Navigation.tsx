import React from 'react'
import {FiCommand,FiSettings} from 'react-icons/fi'

function Navigation() {
  return (
    <nav className='w-[100%] h-[50px] flex justify-between items-center px-5 box-border text-sm text-white'>
        <div className='w-[40%] h-[100%] flex justify-start items-center cursor-pointer'>
            <FiCommand  />
            <h1 className="ml-2">Daily Focus</h1>
        </div>
        <FiSettings className='cursor-pointer text-xl'/>
    </nav>
  )
}

export default Navigation