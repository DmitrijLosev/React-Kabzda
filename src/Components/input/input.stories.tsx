import {action} from "@storybook/addon-actions"


import React, {useState, useRef, ChangeEvent} from "react";

export default {
    title: "input",

};


//SYNTAX SUGAR!!!!!!!!!!!!!!!!!!!!!!!!!
/*type Story = StoryObj<typeof ControlledAccordion>;

export const FirstStory: Story = {
    args: {
        titleValue:"CollapsedAccordion",
        collapsed:true,
    },
};*/

/*const onChangeHandler=action("onChangeRating")*/
export const UncontrolledInput = () => {
    return <input/>
};
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const click = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input onChange={click}/>
        ---{value}
    </>
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const text = useRef<HTMLInputElement>(null);
    const save = () => {
        if (text.current?.value) {
            setValue(text.current?.value)
        }
    }

    return <>
        <input ref={text}/>
        <button onClick={save}>save</button>
        ---{value}
    </>
};
export const ControlledInputWithFixedValue = () => {
    return <input value={"controlled by me"}/>
};

export const ControlledInput = () => {
    const [value, setValue] = useState("")
    const click = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input onChange={click} value={value}/>
        ---{value}
    </>
};
export const ControlledCheckbox= () => {
    const [value, setValue] = useState(false)
    const click = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)
    return <>
        <input type="checkbox" onChange={click} checked={value}/>
        ---{JSON.stringify(value)}
    </>
};
export const ControlledSelect= () => {
    const [value, setValue] = useState<string>("1")
    const change = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return <>
        <select onChange={change} value={value}>
            <option value={1}>None</option>
            <option value={2}>Minks</option>
            <option value={3}>Moscow</option>
            <option value={4}>Kiev</option>
        </select>

        ---{value}
    </>
};

