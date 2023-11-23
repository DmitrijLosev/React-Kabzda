import React, {useState} from "react";

export function Accordion(props: { titleValue: string }) {

    const [collapsed, setCollapsed] = useState(false)
    const setNewCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return <>
        <AccordionTitle titleValue={props.titleValue} setNewCollapsed={setNewCollapsed}/>
        {collapsed && <AccordionBody/>}
    </>
}

function AccordionTitle(props: { titleValue: string,setNewCollapsed:()=>void}) {

    return <h3 onClick={props.setNewCollapsed}>{props.titleValue}</h3>
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
