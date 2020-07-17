import React, {useState} from "react";

type UncontrolAccordionPropsType = {
    titleValue: string
}

export function UncontrolAccordion(props: UncontrolAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);

    return <>
        <AccordionTitle title={props.titleValue} setCollapsed={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed:() => void
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