import React, {useReducer, useState} from "react";
import {reducer} from "./reduser";

type UncontrolAccordionPropsType = {
    titleValue: string
}

export function UncontrolAccordion(props: UncontrolAccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return <>
        {/*<AccordionTitle title={props.titleValue} setCollapsed={() => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} setCollapsed={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
        {!state.collapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed()}>{props.title}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
};