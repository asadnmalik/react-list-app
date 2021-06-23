import React from 'react'
import Card from '../UI/Card'
import './UserList.css'
import User from './User.js'

export default function UserList(props) {

    const users = props.data



    return (
        
        

        <Card className="users">
            {/* <User name={users[0].name} age={users[0].age} />
            <User name={users[1].name} age={users[1].age} />
            <User name={users[2].name} age={users[2].age} /> */}

            {users.map((users)=>{
            return <User key = {users.id} name={users.name} age={users.age} />  
                     
            })}

        </Card>
        
    )
}
