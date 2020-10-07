import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '@storybook/react/demo';
import {log} from "util";

export default {
    title: 'usememo',
    //component: Button,
};

const UserSecret = (props: { users: Array<string> }) => {
    console.log('USER SECRET');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
};

const Users = React.memo(UserSecret);

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['REact', 'JS', 'CSS', 'HTML']);

    const memoizedAddBook = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBooks);
    }, [books]);
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book  addBook={memoizedAddBook}/>
        </>
    )
};

type BooksSecretPropsType = { addBook: () => void }

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
  </div>
};

const Book = React.memo(BooksSecret);