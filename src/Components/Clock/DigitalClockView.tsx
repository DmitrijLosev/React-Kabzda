import React from "react";

type DigitalClockViewPropsType = {
    hours: number
    minutes: number
    seconds: number
}
export const DigitalClockView: React.FC<DigitalClockViewPropsType> = React.memo(({hours, minutes, seconds}) => {
        const dateCorrector = (num: number) => {
            return num.toString().length > 1 ? num.toString() : `0${num}`
        }
        return (
            <div>
                <span>{dateCorrector(hours)}</span>:
                <span>{dateCorrector(minutes)}</span>:
                <span>{dateCorrector(seconds)}</span>
            </div>
        );
    }
)


