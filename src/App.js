import React, {useState} from 'react';

import NewUser from './components/NewUser/NewUser'
import UserList from './components/Users/UserList';

function App() {

  // const users = [
  //   {id: 1, name: "asad", age: 24},
  //   {id: 2, name: "raheel", age: 30},
  //   {id: 3, name: "ali", age: 32}
  // ]

  const [users, setUsers] = useState([
    {id: 1, name: "asad", age: 24},
    {id: 2, name: "raheel", age: 30},
    {id: 3, name: "ali", age: 32}
  ])

  //recieving from child component
  const addUserHandler = user => {
    console.log(user)
    let newUserData = [...users, user]
    console.log(newUserData)
    setUsers(newUserData)
    console.log(users)
  }

  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>

      <UserList data={users}/>
      
    </div>
  );
}

export default App;
