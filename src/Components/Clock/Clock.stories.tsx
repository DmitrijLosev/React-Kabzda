import {Clock} from "./Clock";


export  default {
    title:"Clock",
}

export const ClockNumberSelfMade = () => {
    return <Clock viewMode={"numbers"}/>
}
export const ClockSelfMade = () => {
    return <Clock viewMode={"clock"}/>
}