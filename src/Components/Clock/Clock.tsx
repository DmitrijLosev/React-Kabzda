import React, {useEffect, useState} from "react";
import "./Clock.css"

export const Clock: React.FC<{viewMode:"numbers" | "clock"}> = ({viewMode}) => {
    const [curHour, curMinutes, curSeconds] = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]
    const [hours, setHours] = useState(curHour)
    const [minutes, setMinutes] = useState(curMinutes)
    const [seconds, setSeconds] = useState(curSeconds)


    useEffect(() => {
        const intervalId = setTimeout(() => {
            setSeconds(seconds < 59 ? seconds + 1 : 0)
            setMinutes(seconds === 59 && minutes<59 ? minutes + 1 : seconds === 59 && minutes===59 ? 0 : minutes)
            setHours(seconds === 59 && minutes === 59 && hours<23 ? hours+1 : seconds === 59 && minutes === 59 && hours===23 ? 0 : hours)
        }, 1000)
        return ()=>{clearTimeout(intervalId)}
    })
const dateCorrector= (num:number)=>{
       return num.toString().length>1 ? num.toString() : `0${num}`
}

    return (
        viewMode==="numbers" ?
        <div>
            <span>{dateCorrector(hours)}</span>:<span>{dateCorrector(minutes)}</span>:<span>{dateCorrector(seconds)}</span>
        </div>
            :
            <div className={"clock"}>
                <div className={"clock-center"}>
                    <span style={{"transform": `rotate(${30*hours-90}deg)` }} className={"arrow-hour"}></span>
                    <span style={{"transform": `rotate(${6*minutes-90}deg)` }} className={"arrow-minutes"}></span>
                    <span  style={{"transform": `rotate(${6*seconds-90}deg)` }} className={"arrow-seconds"}></span>
                    <span className={"fixedTime0"}></span>
                    <span className={"fixedTime3"}></span>
                    <span className={"fixedTime6"}></span>
                    <span className={"fixedTime9"}></span>
                </div>
            </div>
    );
};

