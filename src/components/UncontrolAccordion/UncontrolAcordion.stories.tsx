import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolAccordion} from "./UncontrolAccordion";

export default {
    title: 'UncontrolAccordion',
    component: UncontrolAccordion,
};
const callback = action("on or off clicked");

export const RatingMode = () => <UncontrolAccordion titleValue={'test'} />;
