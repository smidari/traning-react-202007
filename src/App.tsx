import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnnOff/OnOf";
import UncontrolAccordion from "./components/UncontrolAccordion/UncontrolAccordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolRating} from "./components/UncontrolRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolOnOff from "./components/OnnOff/UncontroledOnOff";

export type RatingValueTpe=  0| 1 | 2 | 3 | 4 | 5;
const App = () => {
    let [ratingValue, setratingValue] = useState<RatingValueTpe>(0);
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true);
    let [on, setOn] = useState(false);

    return (
        <div className='App'>
            <UncontrolOnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} setratingValue={setratingValue} />
            <Accordion titleValue='New menu' setAccordionCollapsed={setAccordionCollapsed} accordionCollapsed={accordionCollapsed}/>

            <OnOff/>
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
