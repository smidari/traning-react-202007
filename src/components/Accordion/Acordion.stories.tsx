import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callback = action("Accordion mode change event fired");
const onClickCallback = action('Some item was clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onCollapsed={true}
                                                  onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} onCollapsed={false}
                                                     onChange={callback}
                                                     items={[
                                                         {title: 'Dima', value: 1},
                                                         {title: 'Dasha', value: 2},
                                                         {title: 'Masha', value: 3},
                                                         {title: 'sdasd', value: 4}
                                                     ]}
                                                     onClick={onClickCallback}
/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Users'}
        onCollapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Dima', value: 1},
            {title: 'Dasha', value: 2},
            {title: 'Masha', value: 3},
            {title: 'sdasd', value: 4}
        ]}
        onClick={(value) => alert(`User with ID ${value} should be happy `)}
    />
};

