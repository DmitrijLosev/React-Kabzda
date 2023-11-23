import React from "react";

export function ControlledAccordion(props: { titleValue: string,changeCollapsed:()=>void, collapsed:boolean }) {
    const { titleValue, changeCollapsed, collapsed} = props

    return <>
        <AccordionTitle titleValue={titleValue} changeCollapsed={changeCollapsed}/>
        {!collapsed && <AccordionBody/>}
    </>
}

function AccordionTitle(props: { titleValue: string,changeCollapsed:()=>void}) {

    return <h3 onClick={props.changeCollapsed}>{props.titleValue}</h3>
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
