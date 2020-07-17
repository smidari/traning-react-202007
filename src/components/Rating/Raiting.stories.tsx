import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Rating} from "./Rating";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} setratingValue={x => x}/>;
export const Rating1 = () => <Rating value={1} setratingValue={x => x}/>;
export const Rating2 = () => <Rating value={2} setratingValue={x => x}/>;
export const Rating3 = () => <Rating value={3} setratingValue={x => x}/>;
export const Rating4 = () => <Rating value={4} setratingValue={x => x}/>;
export const Rating5 = () => <Rating value={5} setratingValue={x => x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} setratingValue={setRating}/>
};

