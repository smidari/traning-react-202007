import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolOnOff} from "./components/UncontrolOnnOff/UncontrolOnOff";
import {Rating} from "./components/Rating/Rating";
import {UncontrolRating} from "./components/UbcontrolRating/UncontrolRating";
import {UncontrolAccordion} from "./components/UncontrolAccordion/UncontrolAccordion";
import {Select} from "./components/select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
const App = () => {
    let [ratingValue, setratingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState(false);

    let [selectCollapsed, setSelectOnCollapsed] = useState(false);
    let [capital, setCapital] = useState<string>('capital');

    return (
        <div className='App'>
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} setratingValue={setratingValue}/>
            <Accordion
                titleValue='New menu'
                onChange={setAccordionCollapsed}
                onCollapsed={accordionCollapsed}
                items={[
                    {title: 'Dima', value: 1},
                    {title: 'Dasha', value: 2},
                    {title: 'Masha', value: 3},
                    {title: 'sdasd', value: 4}
                ]}
                onClick={(value) => alert(`User with ID ${value} should be happy `)}/>
            {/*<UncontrolOnOff/>*/}
            <UncontrolAccordion titleValue='Menu'/>
            <UncontrolAccordion titleValue='User'/>
            {/*<UncontrolRating/>*/}
            {/*{on.toString()}*/}
            <Select capital={capital}
                    setCapital={setCapital}
                    selectCollapsed={selectCollapsed}
                    setSelectCollapsed={setSelectOnCollapsed}
                    items={[
                        {title: 'Minsk', value: 1},
                        {title: 'Riga', value: 2},
                        {title: 'Kiev', value: 3},
                        {title: 'Amsterdam', value: 4}
                    ]}/>
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
