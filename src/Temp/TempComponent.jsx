import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'



const TempComponent = () => {
    const user = useContext(UserContext)
    return (
        <div>
            Temp Component: {user}
        </div>
    )
}

export default TempComponent
