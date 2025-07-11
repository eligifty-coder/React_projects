const InvalidPassword = () => <h1>Invalid Password</h1>
const ValidPassword = () => <h1>Valid Password</h1>

const Password = ({isValid}) => {
    if(isValid){
      console.log(isValid)
        return <ValidPassword/>
    }
    return <InvalidPassword/>
}
const App = () => {
  return <Password isValid={false}/>
}


export default App;