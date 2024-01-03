import {action} from "@storybook/addon-actions"

import React, {useEffect, useMemo, useState} from "react";


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
        setInterval(()=>{
            setCounter(n=>n+1)
        },1000)

    },[])


    return <div>
        {/*<button onClick={() => setCounter(counter + 1)}>counter1 +</button>*/}
        <h2>counter1---secondsCheckers: {counter}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>counter2 +</button>
        <h2>counter2: {counter2}</h2>
    </div>


}

export const TimeInTitleExample = () => {

    const [time, setTime] = useState<string[]>(['00','00','00'])

    console.log(time)


    useEffect(() => {
        console.log("useEffect ")
        setInterval(()=>{
            const hours=new Date().getHours().toString().length===1 ? "0" + new Date().getHours().toString() :new Date().getHours().toString()
            const minutes =new Date().getMinutes().toString().length===1 ? "0" + new Date().getHours().toString() : new Date().getMinutes().toString()
            const seconds =new Date().getSeconds().toString().length===1 ? "0" + new Date().getSeconds().toString() : new Date().getSeconds().toString()
                setTime([hours,minutes,seconds])
        },1000)

    },[])
    useEffect(() => {
        console.log("useEffect2 ")
       document.title=`LIVE RIGA - ${time[0]} : ${time[1]} : ${time[2]}`

    },[time])


    return <div>
        {time[0]==='00'&&time[1]==='00'&&time[2]==='00' ? <div>PENDING...</div>:
            <div>TIME IN RIGA - {time[0]} : {time[1]} : {time[2]}</div>}
    </div>


}
