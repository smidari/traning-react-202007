import React, {useState} from "react";
import {RatingValueType} from "../../App";

export function UncontrolRating() {

    let [value, setvalue] = useState(0);
    return (
        <div>
            <Star selected={value > 0} setvalue={setvalue} value={1}/>
            <Star selected={value > 1} setvalue={setvalue} value={2}/>
            <Star selected={value > 2} setvalue={setvalue} value={3}/>
            <Star selected={value > 3} setvalue={setvalue} value={4}/>
            <Star selected={value > 4} setvalue={setvalue} value={5}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setvalue: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => (
    <span onClick={() => props.setvalue(props.value)}>
        {props.selected ? <b>star </b> : ' star '}
    </span>
);