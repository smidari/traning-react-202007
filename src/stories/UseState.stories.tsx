import React, {useMemo, useState} from 'react';


export default {
    title: 'useState demo',
    //component: Button,
};

function generelData() {
    //difficult couting
    console.log('data');
    return 324234234;

}

export const Example1 = () => {
    console.log('Example');
    const [counter, setCounter] = useState(generelData); // [0, function(newValue){}]
    // const initialValue = useMemo(generelData, []);
    const changer = (state: number) => state + 1;
    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
};
