import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolOnOff} from "./UncontrolOnOff";

export default {
    title: 'UncontrolOnOff',
    component: UncontrolOnOff,
};
const callback = action("on or off clicked");

export const UncontrolOnMode = () => <UncontrolOnOff defaultOn={true} onCange={callback}/>;
export const UncontrolOffMode = () => <UncontrolOnOff defaultOn={false} onCange={callback}/>;
