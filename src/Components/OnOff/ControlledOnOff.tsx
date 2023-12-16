import React from "react";
import "./OnOff.css"

type ControlledOnOffPropsType={on:boolean, setOn:()=>void}
export const ControlledOnOff: React.FC<ControlledOnOffPropsType> = React.memo(({on,setOn}) => {

    return (
        <div className={"wrapper"}>
            <div onClick={setOn} className={`onSquare ${on && "activeGreen"}`}>On</div>
            <div onClick={setOn} className={`offSquare ${!on && "activeRed"}`}>Off</div>
            <div className={`circle ${on && "activeGreen"}`}></div>
        </div>
    );
}
)
