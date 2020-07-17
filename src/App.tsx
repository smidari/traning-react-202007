import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolOnOff} from "./components/UncontrolOnnOff/UncontrolOnOff";
import {Rating} from "./components/Rating/Rating";
import {UncontrolRating} from "./components/UbcontrolRating/UncontrolRating";
import {UncontrolAccordion} from "./components/UncontrolAccordion/UncontrolAccordion";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
const App = () => {
    let [ratingValue, setratingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState(false);

    return (
        <div className='App'>
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} setratingValue={setratingValue}/>
            <Accordion
                titleValue='New menu'
                setAccordionCollapsed={setAccordionCollapsed}
                accordionCollapsed={accordionCollapsed}/>
            <UncontrolOnOff/>
            <UncontrolAccordion titleValue='Menu'/>
            <UncontrolAccordion titleValue='User'/>
            <UncontrolRating/>{on.toString()}
        </div>
    )
};


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PafeTitle render');
    return <div>{props.title}</div>
}

export default App;
