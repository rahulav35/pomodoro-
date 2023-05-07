import React from 'react'
import { FiX } from "react-icons/fi";

function ModelSetting({
    pomodoroRef,
    shortBreakRef,
    longBreakRef,
    openSetting,
    setOpenSetting,
    updateTimeDefaultValue 
}:
{

    pomodoroRef :any
    shortBreakRef: any
    longBreakRef:any
    openSetting: any
    setOpenSetting:any
    updateTimeDefaultValue:any


}) 

{



const inputs = [
    {
        value : "Pomodoro",
        ref : pomodoroRef,
        defaultValue: 25
    },

    {
        value : "Short Break",
        ref : shortBreakRef,
        defaultValue: 5
    },

    {
        value : "Long Break",
        ref : longBreakRef,
        defaultValue: 10
    }
]







  return (

<>
<div className={`absolute h-full w-full bg-black bg-opacity-30 top-0 left-0

${openSetting ? "":"hidden"}`} >

        <div className={`max-w-xl bg-white  absolute sm:w-96 top-28 right-20 w-11/12 p-5 rounded-md 
    ${openSetting ? "" : "hidden" }`}>
            
<div className="text-gray-400 flex justify-between items-center">
    <h1 className="uppercase font-bold tracking-wider">Time Setting</h1>
    <FiX onClick={()=>setOpenSetting(false)} className='text-2xl'/>
</div>

<div className="h-[3px] w-full bg-gray-400 my-5"></div>

<div className="flex gap-5">
    {inputs.map((input,index)=>{
        return(
            <div key={index}>
                <h1 className=" text-gray-400 text-sm ">{input.value}</h1>
                <input 
                defaultValue ={input.defaultValue}
                type="number"
                className='w-full bg-gray-400 bg-opacity-30 py-2 rounded outline-none text-center'
                ref={input.ref}
                />
            </div>
        )
    })}
</div>

<button onClick={updateTimeDefaultValue } className='uppercase bg-green-500 w-full py-2 box-border mt-5 text-white rounded'>save </button>

        </div>
    </div>

</>

   
  )
}

export default React.memo (ModelSetting) ;