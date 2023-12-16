import React from "react";

type ItemType = {
    title: string
    value: any
}

type ControlledAccordionPropsType = {
    titleValue: string
    changeCollapsed: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export const ControlledAccordion = React.memo(function ControlledAccordion(props: ControlledAccordionPropsType) {
        const {titleValue, changeCollapsed, collapsed, items, onClick} = props

        return <>
            <AccordionTitle titleValue={titleValue} changeCollapsed={changeCollapsed}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </>
    }
)

export const AccordionTitle = React.memo(function AccordionTitle(props: {
        titleValue: string,
        changeCollapsed: () => void
    }) {

        return <h3 onClick={props.changeCollapsed}>{props.titleValue}</h3>
    }
)

export const AccordionBody = React.memo(function AccordionBody(props: {
        items: ItemType[],
        onClick: (value: any) => void
    }) {

        return <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)}
                                               key={`${i.title}+${index}`}>{i.title}</li>)}
        </ul>
    }
)