import React from 'react'

const Greeting = ({timeOfDay}) => {
    return (
    <div>
        {timeOfDay=='morning'? "Good " + timeOfDay :"Good " + timeOfDay}
    </div>
    )
}

export default Greeting