
import UserList from './component/UserList'
import ProductList from './component/ProductList'
const App = () => {
  return (
    <User
    img ='https://avatars.githubusercontent.com/u/58071014?s=400&u=d76cf46c49a7bb6d83554935eeb4f10dd430f85a&v=4'
    name='Gift_jsx' 
    age= {22} 
    isMarried={false} 
    hobbies ={['Coding ', 'Reading ', 'Sleeping ']} />
  )
}

const User  = (props) =>{
  console.log(props)
  return <section>
    <img src={props.img} alt={props.name} width='200' />
    <h1>Name: {props.name}</h1>
    <h2>Age: {props.age}</h2>
    <h3>Is Married: { props.isMarried} </h3>
    <h4>Hobbies: {props.hobbies}</h4>
  </section>
}

export default App;