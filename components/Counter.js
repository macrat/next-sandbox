import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const useCounter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return {
        count: count,
        increment: () => dispatch({type: 'INCREMENT'}),
    };
};


export default function Counter() {
    const {count, increment} = useCounter();

    return (
        <button onClick={increment}>{count}</button>
    );
}
