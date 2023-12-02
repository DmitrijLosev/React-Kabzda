import {action} from "@storybook/addon-actions"

import {ControlledOnOff} from "./ControlledOnOff";
import React, {useState} from "react";

export default {
    title:"OnOff stories",
    component: ControlledOnOff,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

const onClickHandler=action("onCLick")
export const OnMode = () => {
    return <ControlledOnOff on={true} setOn={onClickHandler}/>
};

export const OffMode = () => {
    return <ControlledOnOff on={false} setOn={onClickHandler}/>
};


export const ChangedOnOff = () => {
    const [value, setValue]=useState(true)
    return <ControlledOnOff on={value} setOn={()=>setValue(!value)}/>
};


