import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    // The useRef Hook allows you to persist values between renders.
    // It can be used to store a mutable value that does not cause a re - render when updated.
    // It can be used to access a DOM element directly.
    // useRef() only returns one item.It returns an Object called current.

    const [inputValue, setInputValue] = useState("")

    // const [count, setCount] = useState(0)
    const count = useRef(0);   // {current: 0}

    useEffect(() => {
        // setCount(count + 1)   -   This will re render the website for an infinite loop
        count.current = count.current + 1;
    })

    // Accessing direct DOM Elements
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    };

    // Using Previous State
    const previousInput = useRef("")
    useEffect(() => {
        previousInput.current = inputValue
    }, [inputValue])

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Name: {inputValue}</h1>
            <p>Re renders: {count.current}</p>

            <h1>Accessing DOM</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>

            <h1>Tracking Changes</h1>
            <p> {inputValue} </p>
            <p> {previousInput.current} </p>
        </div>
    )
}

export default UseRef
