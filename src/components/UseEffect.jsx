import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    /*
         - side effects in components
         - egs: fetching data, updating DOM
         - 2nd argument is optional

         - useEffect runs on every render
         - or whateveer we put in dependency array []

         Note:
         - if the dependency array is empty only runs on first render
         - if any dependency value changes then the useEffect re renders
         - Multiple dependencies are seperated using commas 

         Effect Cleanup
        - Effect cleanups to avoid memory leaks
        - We do this by including a return function at the end of the useEffect Hook.
    */

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Rendered')
    }, [count])

    useEffect(() => {
        console.log("Component Mounted")

        // cleanup function
        return () => {
            console.log("Component unmounted")
        }
    }, [])

    return (
        <div>
            <h1>I have rendered {count} times.</h1>
            <button
                onClick={() => setCount(count + 1)}
            >Click</button>
        </div>
    )
}

export default UseEffect
