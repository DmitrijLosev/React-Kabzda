import React, {useEffect, useState} from "react";
import "./Clock.css"
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


export const Clock: React.FC<{ viewMode: "digital" | "analog" }> = ({viewMode}) => {
    const [curHour, curMinutes, curSeconds] = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]
    const [hours, setHours] = useState(curHour)
    const [minutes, setMinutes] = useState(curMinutes)
    const [seconds, setSeconds] = useState(curSeconds)


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSeconds(seconds < 59 ? seconds + 1 : 0)
            setMinutes(seconds === 59 && minutes < 59 ? minutes + 1 :
                seconds === 59 && minutes === 59 ? 0 : minutes)
            setHours(seconds === 59 && minutes === 59 && hours < 23 ?
                hours + 1 : seconds === 59 && minutes === 59 && hours === 23 ? 0 : hours)
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    })



    let view;
    switch (viewMode) {
        case "digital" :
            view =  <DigitalClockView hours={hours} minutes={minutes} seconds={seconds}/>
           break;
        case "analog" :
        default: view = <AnalogClockView hours={hours} minutes={minutes} seconds={seconds}/>

    }

    return (<>
            {view}
        </>
    );
};

