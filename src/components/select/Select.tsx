import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css';

type ItemSelectType = {
    title: string
    value: number
}
type SelectPropsType = {
    selectCollapsed: boolean
    capital: string
    setCapital: (title: string) => void
    setSelectCollapsed: (value: boolean) => void
    items: ItemSelectType[]
}

export const Select = (props: SelectPropsType) => {
    return (
        <>
            <div className={s.header}
                 onClick={() => props.setSelectCollapsed(!props.selectCollapsed)}>{props.capital}</div>
            {props.selectCollapsed && <SelectBody
              items={props.items}
              setCapital={props.setCapital}
              selectCollapsed={props.selectCollapsed}
              setSelectCollapsed={props.setSelectCollapsed}/>
            }
        </>
    )
};

type SelectBody = {
    selectCollapsed: boolean
    setSelectCollapsed: (i: boolean) => void
    items: ItemSelectType[]
    setCapital: (title: string) => void
}
const SelectBody = (props: SelectBody) => {
    return (
        <div className={s.body}>
            {props.items.map((i: any) => <div onClick={() => {
                props.setCapital(i.title);
                props.setSelectCollapsed(!props.selectCollapsed)
            }}>{i.title}</div>)}

        </div>
    )
};

type ItemType = {
    title: string
    value: string
}
type SelectIncubatorPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[];
}
export const SelectIncubator = (props: SelectIncubatorPropsType) => {

    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(props.value);
    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    };

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? (props.items[i + 1]) : (props.items[i - 1]);
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            props.onChange(props.items[1].value);
        }
        if(e.key === 'Enter'|| e.key === 'Escape'){
            setActive(false)
        }
    };
    return (
        <>

            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
                </div>
                }

            </div>
        </>
    )
};