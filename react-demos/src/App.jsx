const InvalidPassword = () => <h1>Invalid Password</h1>
const ValidPassword = () => <h1>Valid Password</h1>

const Password = ({isValid}) => isValid?  <ValidPassword/> :<InvalidPassword/>

const App = () => {
  return <Password isValid={true}/>
}


export default App;