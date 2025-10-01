import React, { useState } from 'react'

const UseState = () => {
    const [color, setColor] = useState("red")

    // Instead of having multiple states we can have a single object
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "red"
    })

    const changeDetails = () => {
        setCar(
            prevState => {
                return { ...prevState, color: 'green' }
            }
        )
    }

    return (
        <div>
            <h1>My Favourite Color is : {color}</h1>
            <button
                type='button'
                onClick={() => setColor('blue')}
            >
                Change
            </button>

            <div>
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} car with model: {car.model}.
                </p>

                {/* This would not work as it would remove the other variables */}
                {/* <button
          onClick={() => setCar({ color: "blue" })}
        >
          Car change
        </button> */}

                {/* so we have to use spread operator */}
                <button
                    onClick={changeDetails}
                >
                    Car Change
                </button>

            </div>


        </div>
    )
}

export default UseState;
