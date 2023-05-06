import React from 'react'

function Timer({stage,switchStage,getTickingTime,seconds, ticking,setTicking}:{stage : any, switchStage:any, getTickingTime : any , seconds : any, ticking:any, setTicking:any}) {

    const options = ["Pomodoro" , "Short Break" , "Long Break"]

  return (
    <div className='w-10/12  mx-auto  text-white flex flex-col justify-center items-center mt-7'>
        <div className="flex gap-5 items-center">
            {options.map((option,index)=>{
                return( 
                    <h1 key={index} className={`${index === stage ? "bg-gray-500 bg-opacity-30" : ""}p-1 box-border cursor-pointer transition-all rounded-lg w-[100px] flex items-center justify-center  `}
                    onClick={()=>switchStage(index)} >
                        {option}</h1>
                )
            })}
        </div>
        <div className="mt-10">
            <h1 className="text-8xl font-bold select-none m-0">{getTickingTime()}:{seconds}</h1>

        </div>
        <button onClick={()=>setTicking((ticking: any)=>!ticking)} className='h-[35px] w-[130px] bg-white text-blue-950 font-bold my-10 text-lg rounded-lg '>{ticking ? "STOP" : "START"}</button>
    </div>
  )
}

export default Timer