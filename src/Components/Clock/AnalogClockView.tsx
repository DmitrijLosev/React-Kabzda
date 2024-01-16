import React from "react";

type AnalogClockViewPropsType = {
    hours: number
    minutes: number
    seconds: number
}
export const AnalogClockView: React.FC<AnalogClockViewPropsType> = React.memo(({hours, minutes, seconds}) => {
        return (
            <div className={"clock"}>
                <div className={"clock-center"}>
                    <span style={{"transform": `rotate(${30 * (hours + minutes / 60)  - 90}deg)`}} className={"arrow-hour"}></span>
                    <span style={{"transform": `rotate(${6 * minutes - 90}deg)`}} className={"arrow-minutes"}></span>
                    <span style={{"transform": `rotate(${6 * seconds - 90}deg)`}} className={"arrow-seconds"}></span>
                    <span className={"fixedTime0"}></span>
                    <span className={"fixedTime3"}></span>
                    <span className={"fixedTime6"}></span>
                    <span className={"fixedTime9"}></span>
                </div>
            </div>
        );
    }
)
