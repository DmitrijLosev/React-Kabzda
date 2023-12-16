import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


export const Accordion = React.memo(function Accordion(props: { titleValue: string }) {

        const [state, dispatch] = useReducer(reducer, {toggleCollapsed: false})
        const setNewCollapsed = () => {
            dispatch({type: TOGGLE_CONSTANT})
        }
        return <>
            <AccordionTitle titleValue={props.titleValue} setNewCollapsed={setNewCollapsed}/>
            {state.toggleCollapsed && <AccordionBody/>}
        </>
    }
)

const AccordionTitle = React.memo(function AccordionTitle(props: { titleValue: string, setNewCollapsed: () => void }) {

        return <h3 onClick={props.setNewCollapsed}>{props.titleValue}</h3>
    }
)

const AccordionBody = React.memo(function AccordionBody() {

        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }
)