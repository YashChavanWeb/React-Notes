import React, { useState } from 'react'

const CustomHooks = () => {

    // start with use Prefix
    // use actual hooks inside your custom hooks
    // functional components were dumb components

    // Rules:
    // 1. state management ability should be there in the hook
    // 2. should use any other hooks in the custom Hook

    // Hooks returns:
    // 1. object or nothing
    // 2. Hook can skip returning a value

    const [count, increase, decrease] = useCounter()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Incr</button>
            <button onClick={decrease}>Decr</button>
        </div>
    )
}

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return [count, increase, decrease]
}



export default CustomHooks



