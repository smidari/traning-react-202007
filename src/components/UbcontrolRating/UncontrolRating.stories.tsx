import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolRating} from "./UncontrolRating";

export default {
    title: 'UncontrolRating',
    component: UncontrolRating,
};
let callback = action('rating changing inside component');
export const UncontrolRating0 = () => <UncontrolRating defaultValue={0} onChange={callback}/>;
export const UncontrolRating1 = () => <UncontrolRating defaultValue={1} onChange={callback}/>;
export const UncontrolRating2 = () => <UncontrolRating defaultValue={2} onChange={callback}/>;
export const UncontrolRating3 = () => <UncontrolRating defaultValue={3} onChange={callback}/>;
export const UncontrolRating4 = () => <UncontrolRating defaultValue={4} onChange={callback}/>;
export const UncontrolRating5 = () => <UncontrolRating defaultValue={5} onChange={callback}/>;
