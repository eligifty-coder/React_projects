import React from 'react'

const Weather = ({temperature}) => {
    if(temperature < 15){
        return <h1> It's cold outside!</h1>
    }else if(temperature >= 15 && temperature <=25){
        return <h2>it's nice outside!</h2>
    }else{
        return <h2>it's hot outside!</h2>
    }
}

export default Weather