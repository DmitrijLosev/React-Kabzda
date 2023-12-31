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

const onChangeHandler = action("onChange Accordion")
const callback = action("some item was clicked")
export const CollapsedAccordion = () => {
    return <ControlledAccordion titleValue={"CollapsedAccordion"} collapsed={true} changeCollapsed={
        onChangeHandler} items={[]} onClick={() => {
    }}/>
};

export const OpenAccordion = () => {
    return <ControlledAccordion titleValue={"OpenAccordion"} collapsed={false} changeCollapsed={onChangeHandler} items={
        [
            {title: "Dima", value: 1},
            {title: "Valera", value: 2},
            {title: "Victor", value: 3},
            {title: "Sveta", value: 4},
            {title: "Dasha", value: 5}
        ]}
                                onClick={callback}
    />
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <ControlledAccordion titleValue={"Accordion"} collapsed={collapsed} changeCollapsed={() => {
        setCollapsed(!collapsed)
    }} items={
        [
            {title: "Dima", value: 1},
            {title: "Valera", value: 2},
            {title: "Victor", value: 3},
            {title: "Sveta", value: 4},
            {title: "Dasha", value: 5}
        ]}
                                onClick={(id)=>alert(`people with ID ${id} good man
                                `)}/>
}

