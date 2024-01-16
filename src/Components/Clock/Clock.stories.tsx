import {Clock} from "./Clock";


export  default {
    title:"Clock",
}

export const ClockNumberSelfMade = () => {
    return <Clock viewMode={"digital"}/>
}
export const ClockSelfMade = () => {
    return <Clock viewMode={"analog"}/>
}