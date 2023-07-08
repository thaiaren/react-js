import React, { useReducer } from 'react';
// 1. init state :0
// 2. actions : Up (state+ 1) | down (state - 1)
// 3. Reducer
// 4. Dispatch

//  Init state
const initState = 0;

// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invaid action');
    }
};
const UppDown = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <div className="container-up-down">
            <h1 className="count">{count}</h1>
            <div className="btn-up-down">
                <button>up</button>
                <button>Down</button>
            </div>
        </div>
    );
};

export default UppDown;
