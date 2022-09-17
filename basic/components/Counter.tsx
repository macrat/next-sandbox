import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment, State} from '../store';


const useCounter = () => {
    const count = useSelector((state: State) => state.count);
    const dispatch = useDispatch();

    return {
        count: count,
        increment: () => dispatch(increment()),
    };
};


export default function Counter() {
    const {count, increment} = useCounter();

    return (
        <button onClick={increment}>{count}</button>
    );
}
