import {action} from "@storybook/addon-actions"

import React, {useMemo, useState} from "react";


export default {
    title: "useStateDemo",

};
const hardCalc = () => {
    console.log("calc")
    return 19898 * 2 * 3 * 500
}


export const Example1 = () => {
    /*const hardCalc=useMemo(()=>{
        console.log("calc")
        return 19898 * 2 * 3 * 500
    },[])*/
    const incFn=(state:number)=>state+1
    console.log("Example1")
    const [counter, setCounter] = useState<number>(hardCalc)

    return <div>
        <button onClick={() => setCounter(incFn)}>+</button>
        {counter}
    </div>


}


