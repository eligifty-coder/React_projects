import React from 'react'
import Weather from './component/Weather'
import UserStatus from './component/UserStatus'
import Greeting from './component/Greeting'
Greeting

const App = () => {
  return <>
  <Weather temperature={30}/>
  <UserStatus loggedIn={true} isAdmin ={true} />
  <Greeting timeOfDay = "morning"/>
  </>
}


export default App;