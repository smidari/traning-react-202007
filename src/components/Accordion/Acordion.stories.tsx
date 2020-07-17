import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callback = action("Accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} accordionCollapsed={true}
                                                  setAccordionCollapsed={callback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} accordionCollapsed={false}
                                                     setAccordionCollapsed={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} accordionCollapsed={value} setAccordionCollapsed={setValue}/>
};

