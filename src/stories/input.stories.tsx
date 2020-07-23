import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';

export default {
    title: 'input',
    //component: Button,
};

export const UncontrolInput = () => <input/>;
export const TrekValueUncontrolInput = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };
    return <>
        <input onChange={onChange}/>
        {value}
    </>
};

export const GetValueUncontrolInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    };
    return <>
        <input ref={inputRef}/>
        <button
            onClick={save}>
            save
        </button>
        -actual value:{value}
    </>
};

export const ControlItput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value);
    return <input value={parentValue} onChange={onChange}/>
};
export const ControlCheckBox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked);
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>

};
export const ControlSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value);
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Msk</option>
        <option value={'3'}>Kiev</option>
    </select>
};

export const ControlInputWithFixedValue = () =>
    <input value={'test'}/>;

