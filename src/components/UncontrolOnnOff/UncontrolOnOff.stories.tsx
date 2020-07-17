import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolOnOff} from "./UncontrolOnOff";

export default {
    title: 'UncontrolOnOff',
    component: UncontrolOnOff,
};
const callback = action("on or off clicked");

export const RatingMode = () => <UncontrolOnOff />;
