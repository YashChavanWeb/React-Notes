import React, { memo, useMemo, useState } from 'react'

// can wrap the expensive function in the memo and it would not render if not used
const ExpensiveOperation = memo(() => {
    const sum = () => {
        let i = 0;
        for (i = 0; i < 100; ++i) {
            console.log('render')
        }
        return i;
    }

    const total = sum()
    return <h1>{total}</h1>
})

const ExpensiveFunction = () => {
    const sum = () => {
        let i = 0;
        for (i = 0; i < 200; ++i) {
            console.log('again render')
        }
        return i;
    }

    // const total = sum()

    // use the memo hook here
    const total = useMemo(() => {
        return sum()   // this is directly returning
        // but if we want to write logic then we need to return something at the end
    }, [])

    // now this will re render the application but the value is cached so no load on the application

    return (<h2>{total}</h2>)
}

const UseMemo = () => {

    // returns a memorized value 
    // it is used for caching a value so that it does not need to be re-calculated
    // syntax is similar to useEffect hook
    // useCallback returns a cached function while this returns a cached value

    const [count, setCount] = useState(0)

    // when we pass a prop object in the nested component, then it re renders even if we use useMemo hook
    // if the props of memoized component is changed, then react re renders it
    // because everytime the object is stored its stored at a new memory

    // so we can put the memoized value
    const bioData = useMemo(() => {
        return {
            name: "Yash",
            age: 10
        }
    }, [])

    return (
        <div>
            <ExpensiveOperation />
            <ExpensiveFunction bioData={bioData} />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default UseMemo


