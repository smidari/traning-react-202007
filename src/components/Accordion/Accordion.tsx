import React from "react";

type AccordionPropsType = {
    titleValue: string,
    accordionCollapsed: boolean
    setAccordionCollapsed: (a: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return <>
        <AccordionTitle title={props.titleValue}
                        setAccordionCollapsed={props.setAccordionCollapsed}
                        accordionCollapsed={props.accordionCollapsed}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (a:boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() =>props.setAccordionCollapsed(!props.accordionCollapsed) }>{props.title}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}

export default Accordion;