import {action} from "@storybook/addon-actions"

import { Select} from "./Select";
import React, {useState} from "react";

export default {
    title:"Select",
    component: Select,
};


//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

/*const onChangeHandler = action("onChange Accordion")
const callback = action("some item was clicked")*/
export const SimpleSelect = () => {
    const [selectValue, setSelectValue] = useState("")
    return <Select value={selectValue} items={
        [{title: "None", value: 0},
            {title: "Dima", value: 1},
            {title: "Valera", value: 2},
            {title: "Victor", value: 3},
            {title: "Sveta", value: 4},
            {title: "Dasha", value: 5}
        ]} onChangeValue={(value)=>{setSelectValue(value)}} />
};
export const EmptySelect = () => {
    return <Select value={"1"} items={
        [ {title: "Minks", value: 1},
        {title: "Moscow", value: 2},
        {title: "Kiev", value: 3},]} onChangeValue={action("change select")} />
};
/*

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
*/

