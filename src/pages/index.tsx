import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

function index() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState();
  const [ticking, setTicking] = useState(false);

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
    setTicking(false), setPomodoro(25), setShortBreak(5), setLongBreak(10), setSeconds(0);
  };

  const clockTiming = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setMinutes(() => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
        clockTiming();
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
        <Navigation />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          setTicking={setTicking}
        />
        <About />
      </div>
    </div>
  );
}

export default index;
