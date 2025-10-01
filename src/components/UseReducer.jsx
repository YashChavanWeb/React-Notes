import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        if (action.type === 'INCR') {
            return state + 1;
        }

        if (action.type === 'DECR') {
            return state - 1;
        }
    }

    // The useReducer Hook returns the current state and a dispatch method.
    // Alternative of useState, but for bigger applications - we can use useReducer hook
    // const [state, dispatch] = useReducer(reducer, initialState)

    // Dispatch - to send action to the reducer function
    // Reducer - takes current state and action as argument

    // const [count, useCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            Yash Chavan
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "INCR" })} >Increment</button>
            <button onClick={() => dispatch({ type: "DECR" })} >Decrement</button>
        </div>
    )
}

export default UseReducer
