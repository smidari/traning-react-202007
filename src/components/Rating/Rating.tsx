import React from "react";
import {RatingValueTpe} from "../../App";

type RatingPropsType = {
    value: RatingValueTpe
    setratingValue: (value: RatingValueTpe) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} setratingValue={props.setratingValue} value={1}/>
            <Star selected={props.value > 1} setratingValue={props.setratingValue} value={2}/>
            <Star selected={props.value > 2} setratingValue={props.setratingValue} value={3}/>
            <Star selected={props.value > 3} setratingValue={props.setratingValue} value={4}/>
            <Star selected={props.value > 4} setratingValue={props.setratingValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueTpe
    setratingValue: (value: RatingValueTpe) => void
}

const Star = (props: StarPropsType) => (<span onClick={()=>props.setratingValue(props.value)}>{props.selected ? <b>star </b> : 'star'}</span>);

