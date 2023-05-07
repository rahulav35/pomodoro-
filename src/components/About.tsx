import React from 'react'

function About() {
  return (
    <div className=' mx-auto mt-16 text-white '>
        <span className="text-lg sm:text-lg font-medium ">
            <span className='border-b-2 border-red-400'>What</span> is Pomodoro Technique?
        </span>
        <p className='mt-3 tracking-wide opacity-70 text-xs mb-3'>
            The Pomodoro Technique is created by Francesco Cirillo for a more productive work and study The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,seperated by short breaks. Each interval is known as a pomodoro, from a Italian word tomato , after the tomato shaped kitchen timer that Cirillo used as a university student.
        </p>


        <span className="text-lg sm:text-lg font-medium mt-10 ">
            <span className='border-b-2 border-red-400'>What</span> is Daily Focus?
        </span>
        <p className='mt-3 tracking-wider opacity-70 text-xs'>
            Daily focus is small clone project from 
            <a href="https://pomofocus.io/" target='_blank' className='underline'>
            https://pomofocus.io/.
            </a>
            It is open sourse and here is the code.
            <a href="https://github.com/Chensokheng/pomodoro" target='_blank' className='underline'>
            https://github.com/Chensokheng/pomodoro/.
            </a>
        </p>
    </div>
  )
}
export default React.memo (About) ;