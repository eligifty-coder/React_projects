
import Person from "./Person"
import Product from "./Product"
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

const User  = ({img,name,age,isMarried,hobbies}) =>{

  return <div>
    <Person 
    name='Gift_jsx'
    age={22}
    />
    <Product
    name='Iphone'
    price = {3000}
    />
  </div>
}

export default App;