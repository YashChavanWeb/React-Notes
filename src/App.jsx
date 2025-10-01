import React from 'react'
// import { useState } from 'react'
import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'
import UseContext from './hooks/useContext'
import UseRef from './hooks/UseRef'
import UseReducer from './hooks/useReducer'
import UseMemo from './hooks/UseMemo'
import UseCallback from './hooks/UseCallback'
import CustomHooks from './hooks/CustomHooks'

const App = () => {

  // for unmounting logic
  // const [show, setShow] = useState(true)

  return (
    <div>
      {/* <UseState />  */}

      {/* 
      <button onClick={() => setShow(prevState => !prevState)}>
        Toggle Component
      </button>
      {show && <UseEffect />}
       */}

      {/* <UseContext /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <CustomHooks />



    </div>
  )
}

export default App
