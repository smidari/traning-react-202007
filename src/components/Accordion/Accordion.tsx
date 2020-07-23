import React from "react";


type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string,
    onCollapsed: boolean
    onChange: (a: boolean) => void
    items: Array<ItemType>
    onClick: (value: string) => void
}

export function Accordion(props: AccordionPropsType) {
    return <>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
                        onCollapsed={props.onCollapsed}/>
        {!props.onCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    onCollapsed: boolean
    onChange: (a:boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() =>props.onChange(!props.onCollapsed) }>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>)
}