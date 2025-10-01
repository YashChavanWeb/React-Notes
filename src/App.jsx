import React from 'react'
// import { useState } from 'react'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseContext from './components/useContext'
import UseRef from './components/UseRef'
import UseReducer from './components/useReducer'
import UseMemo from './components/UseMemo'
import UseCallback from './components/UseCallback'

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



    </div>
  )
}

export default App
