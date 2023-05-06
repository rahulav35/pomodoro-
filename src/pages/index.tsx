import About from "@/components/About";
import Alarm from "@/components/Alarm";
import ModelSetting from "@/components/ModelSetting";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

function index() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [isTimeup, setIsTimeup] = useState(false)
  const [openSetting, setOpenSetting] = useState<boolean>(false)

  const alarmRef = useRef<any>();
  const pomodoroRef = useRef<any> ();
  const shortBreakRef = useRef<any> ();
  const longBreakRef = useRef<any> ();


  
  const updateTimeDefaultValue = ()=> {
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSeconds(0);
    setConsumedSecond(0)
  }

  const [stage, setStage] = useState(0);
  const switchStage = (index: any) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
  };

  const getTickingTime = () => {
    const timeStage: {
      [x: number]: number;
    } = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage: {
      [x: number]: Dispatch<SetStateAction<number>>;
    } = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setConsumedSecond(0), setTicking(false), setPomodoro(25), setShortBreak(5), setLongBreak(10), setSeconds(0);
  };

  const timeUp = ()=> {
    reset ();
   if (alarmRef.current) {
    alarmRef.current.play()
    
   }
   setIsTimeup(true);
  }

  const muteAlarm  = ()=> {
    if (alarmRef.current) {
      alarmRef.current.pause()
      alarmRef.current.currentTime = 0;
    }
    
  }

  const startTimer = ()=>{
    setIsTimeup(false);
    muteAlarm();
    setTicking((ticking)=> !ticking)
  }

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp()
    } else if (seconds === 0) {
      setMinutes(() => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };



  useEffect(() => {

    window.onbeforeunload = ()=> {
      return consumedSecond ? "show warning" : null;
    }
    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
        clockTicking();
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gray-900 ">
      <div className="w-[40%] min-h-screen mx-auto ">
        {" "}
        <Navigation  setOpenSetting={setOpenSetting}/>
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          startTimer={startTimer}
          muteAlarm={muteAlarm}
          isTimeup={isTimeup}
          reset={reset}
        />
        <About />
        <Alarm ref={alarmRef} />
        <ModelSetting 
    pomodoroRef={pomodoroRef}
    shortBreakRef={shortBreakRef}
    longBreakRef={longBreakRef}
    openSetting={openSetting} 
    setOpenSetting={setOpenSetting}
    updateTimeDefaultValue={updateTimeDefaultValue}
    />

      </div>
    </div>
  );
}

export default index;
