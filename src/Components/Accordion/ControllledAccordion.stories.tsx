import {action} from "@storybook/addon-actions"

import {ControlledAccordion} from "./ControllledAccordion";
import React, {useState} from "react";

export default {
    component: ControlledAccordion,
};



//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

const onChangeHandler=action("onChange Accordion")
export const CollapsedAccordion = () => {
    return <ControlledAccordion titleValue={"CollapsedAccordion"} collapsed={true} changeCollapsed={
        onChangeHandler}/>
};

export const OpenAccordion = () => {
    return <ControlledAccordion titleValue={"OpenAccordion"} collapsed={false} changeCollapsed={onChangeHandler}/>
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <ControlledAccordion titleValue={"Accordion"} collapsed={collapsed} changeCollapsed={() => {
        setCollapsed(!collapsed)
    }}/>
}

