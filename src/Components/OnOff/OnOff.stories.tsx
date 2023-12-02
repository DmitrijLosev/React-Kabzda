import {action} from "@storybook/addon-actions"
import React, {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title:"Uncontrolled OnOff",
    component: OnOff,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

const onChangeHandler=action("onChange onOff")

export const OnOffStartOn = () => {
    return <OnOff defaultOn={true} onChange={onChangeHandler}/>
}
export const OnOffStartOff = () => {
    return <OnOff defaultOn={false} onChange={onChangeHandler}/>
}
export const OnOffDemo = () => {
    const [on, setOn] = useState(false)
    return <OnOff onChange={()=>setOn(!on)}/>
}

