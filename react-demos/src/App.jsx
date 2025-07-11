
import UserList from './component/UserList'
import ProductList from './component/ProductList'
const App = () => {
  const numbers =  [1,2,3,4,5]
  const usersInfo = [
        {
          username: "HuXn",
          email: "test@gmail.com",
          location: "USA",
        },
        {
          username: "John",
          email: "jd@gmail.com",
          location: "Arab",
        },
        {
          username: "Alex",
          email: "alexmersion@gmail.com",
          location: "India",
        },
      ];
  return (
    <main >
      <h1>Rendering List in React</h1>
      {
        usersInfo.map(({email, username,  location})=>
          <ul key= {Math.random()}>
            <li>{username}</li>
            <li>{email}</li>
            <li>{location}</li>
          </ul>
        )
      }
      <UserList/>
      <ProductList/>
    </main>
  )
}

export default App;