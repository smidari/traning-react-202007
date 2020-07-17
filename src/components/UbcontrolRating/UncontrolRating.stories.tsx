import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolRating} from "./UncontrolRating";

export default {
    title: 'UncontrolRating',
    component: UncontrolRating,
};
const callback = action("on or off clicked");

export const RatingMode = () => <UncontrolRating />;
