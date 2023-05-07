import React, {  Ref } from 'react'

const Alarm = ({ref}:{ref:Ref<HTMLAudioElement> | undefined})=>{
    return (
        <audio ref={ref}>

            <source src='/Alarm.mp3' type='audio/mp3' />
            
        </audio>
      )
}

export default Alarm