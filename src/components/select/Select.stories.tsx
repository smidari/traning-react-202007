import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select, SelectIncubator} from "./Select";

export default {
    title: 'Select',
    component: SelectIncubator,
};

export const WithValue = () => {
    let [value, setValue] = useState('2');
    return (
        <SelectIncubator
            value={value}
            onChange={setValue}
            items={[
                {title: 'Minsk', value: '1'},
                {title: 'Riga', value: '2'},
                {title: 'Kiev', value: '3'},
                {title: 'Amsterdam', value: '4'}
            ]}
        />
    )
};
// const callback = action("Accordion mode change event fired");
// const callback2 = action("Accordion mode change event fired");
//
// export const BaseSelect = () => {
//     const [value, setValue] = useState<boolean>(false);
//     const [capital, setCapital] = useState<string>('Capital');
//     return (
//         <Select
//             selectCollapsed={value}
//             capital={capital}
//             setCapital={setCapital}
//             setSelectCollapsed={() => setValue(!value)}
//             items={[
//                 {title: 'Minsk', value: 1},
//                 {title: 'Riga', value: 2},
//                 {title: 'Kiev', value: 3},
//                 {title: 'Amsterdam', value: 4}
//             ]}
//         />
//     )
// };
//
// export const WithValue = () => {
//
// };
//
// export const WithoutValue = () => {
//
// };


