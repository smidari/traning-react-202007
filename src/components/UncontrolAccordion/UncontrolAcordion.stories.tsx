import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolAccordion} from "./UncontrolAccordion";

export default {
    title: 'UncontrolAccordion',
    component: UncontrolAccordion,
};

export const UncontrolAccordionMode = () => <UncontrolAccordion titleValue={'test'} />;
