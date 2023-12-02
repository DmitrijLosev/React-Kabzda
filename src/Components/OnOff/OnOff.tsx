import React, {useState} from "react";
import "./OnOff.css"

export const OnOff: React.FC<{ onChange: (on: boolean) => void, defaultOn?:boolean }> = ({onChange, defaultOn}) => {
    const [on, setOn] = useState<boolean>(defaultOn!)
    const onButtonClicked = () => {
        setOn(true)
        onChange(true)
    }
    const offButtonClicked = () => {
        setOn(false)
        onChange(false)
    }


    return (
        <div className={"wrapper"}>
            <div onClick={onButtonClicked}
                 className={`onSquare ${on && "activeGreen"}`}>On
            </div>
            <div onClick={offButtonClicked}
                 className={`offSquare ${!on && "activeRed"}`}>Off
            </div>
            <div className={`circle ${on && "activeGreen"}`}></div>
        </div>

    );
};
