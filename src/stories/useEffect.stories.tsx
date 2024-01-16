import {action} from "@storybook/addon-actions"

import React, {useEffect, useMemo, useState} from "react";
import {clearInterval} from "timers";


export default {
    title: "useEffectDemo",

};


export const Example1 = () => {

    console.log("example1")
    const [counter, setCounter] = useState<number>(1)
    const [counter2, setCounter2] = useState<number>(1)
    useEffect(() => {
        console.log("useEffect without deps")
        document.title=`counter: ${counter}` //======>WORK AFTER EVERY RENDER
    })
    useEffect(() => {
        console.log("useEffect with deps from counter")
        document.title=`counter: ${counter}` //======>WORK FIRST AND AFTER EVERY RENDER THEN DEPENDENCY(COUNTER) CHANGE
    },[counter])
    useEffect(() => {
        console.log("useEffect with empty deps")
        document.title=`counter: ${counter}`//=====>WORK ONLY AFTER FIRST RENDER===ComponentDidMount
    },[])
//api.getUsers().then('')
    //setInterval                      <<<< REASONS TO USE useEffect
    //indexDB
    //document.getElementByID
    //document.title="User"


    return <div>
        <button onClick={() => setCounter(counter + 1)}>counter1 +</button>
       <h2>counter1: {counter}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>counter2 +</button>
        <h2>counter2: {counter2}</h2>
    </div>


}

export const SetTimeOutExample = () => {

    console.log("example1")
    const [counter, setCounter] = useState<number>(1)
    const [counter2, setCounter2] = useState<number>(1)
    console.log(counter)
    /*useEffect(() => {
        console.log("useEffect ")
        setTimeout(()=>{
            document.title=`counter: ${counter}`
        },1000)
    },[counter])*/
    useEffect(() => {
        console.log("useEffect ")
        const intervalId = setInterval(()=>{
            setCounter(n=>n+1)
        },1000)
return ()=>clearTimeout(intervalId)
    },[])


    return <div>
        {/*<button onClick={() => setCounter(counter + 1)}>counter1 +</button>*/}
        <h2>counter1---secondsCheckers: {counter}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>counter2 +</button>
        <h2>counter2: {counter2}</h2>
    </div>


}

export const TimeInTitleExample = () => {

    const [time, setTime] = useState<string[]>(['00', '00', '00'])

    console.log(time)


    useEffect(() => {
        console.log("useEffect ")
        setInterval(() => {
            function getSome(timeSet: number) {
                return timeSet.toString().length === 1 ? "0" + timeSet.toString() : timeSet.toString()
            }

            setTime([
                    getSome(new Date().getHours()),
                    getSome(new Date().getMinutes()),
                    getSome(new Date().getSeconds())
                ]
            )
        }, 1000)

    }, [])
    useEffect(() => {
        console.log("useEffect2 ")
        document.title = `LIVE RIGA - ${time[0]} : ${time[1]} : ${time[2]}`

    }, [time])


    return <div>
        {time[0] === '00' && time[1] === '00' && time[2] === '00' ? <div>PENDING...</div> :
            <div>TIME IN RIGA - {time[0]} : {time[1]} : {time[2]}</div>}
    </div>
}
export const ResetUseEffect = () =>{

    const [counter, setCounter] = useState<number>(1)

    console.log("component render"+ counter)
    useEffect(() => {
        console.log("useEffect occurred" + counter)
        return ()=>{console.log("reset effect" + counter)}
    },[counter])

    const increase = ()=>setCounter(counter+1)
    return <>
    Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeyTrackerUseEffectExample = () =>{

    const [text, setText] = useState<string>("")

    console.log("component render"+ text)
    useEffect(() => {
        const handler =(e:KeyboardEvent)=>{
            console.log(e.key);
            setText(text+e.key)
        }
        console.log("useEffect occurred" + text)
       window.addEventListener("keypress", handler)
        return ()=>window.removeEventListener("keypress", handler)
    },[text])


    return <>
        Typed text: {text}
    </>
}


