import React, {useState} from "react";
import {RatingValueType} from "../../App";

type TypeProps = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolRating(props: TypeProps) {

    let [value, setvalue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);
    return (
        <div>
            <Star selected={value > 0} setvalue={() => {setvalue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setvalue={() => {setvalue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setvalue={() => {setvalue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setvalue={() => {setvalue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setvalue={() => {setvalue(5); props.onChange(5)}}/>
        </div>
    )
};

type StarPropsType = {
    selected: boolean
    setvalue: () => void
}

const Star = (props: StarPropsType) => (
    <span onClick={() => props.setvalue()}>
        {props.selected ? <b>star </b> : ' star '}
    </span>
);