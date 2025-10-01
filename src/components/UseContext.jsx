import { useState } from "react";
import TempComponent from "../Temp/TempComponent";
import { UserContext } from "../contexts/UserContext";

const UseContext = () => {

    // Manage state globally
    // NO need to pass the state through props in the nested components

    /*
    Steps:
    - creating a context
    - wrap the child component in the context provider
    - and then use useContext hook 

    */
    const [user, setUser] = useState("Yash Chavan")
    return (
        // now all the components imported under this tree will be having access to this context
        <UserContext.Provider value={user}>
            <h1>Hello, {user}</h1>
            <TempComponent />
        </UserContext.Provider>
    )
}

export default UseContext
