import React, { memo, useCallback, useState } from 'react'

const UseCallback = () => {

    // Memoizing a function means caching the result of a function so that it does not need to be recalculated.
    // The useCallback function only re-executes when one of its dependencies changes va


    // Two things:
    // - use callback for the function memorizign
    // - use memo for the component so that it does not re render

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])


    return (
        <div>
            <h1>The count is : {count}</h1>
            {/* <button onClick={handleClick}> Click </button> */}

            {/* Special component for button */}
            <ChildComponent handleClick={handleClick} />


        </div >
    )
}

const ChildComponent = memo(({ handleClick }) => {
    console.log('Child component re-rendered');
    return (
        <button onClick={handleClick}>Click</button>
    )
})


export default UseCallback
