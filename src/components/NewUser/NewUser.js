import React from 'react'
import './NewUser.css'
import ListForm from './ListForm'

export default function NewUser(props) {


    //passing to parent Comp
    const onSaveUserDataHandler = (enteredUserData) =>{

        const userData= {
            ...enteredUserData,
            id: Math.random().toString()
        }


        props.onAddUser(userData)

    }
    return (
        <div className ="new-user">
            <ListForm onSaveUserData = {onSaveUserDataHandler} />
            
        </div>
    )
}
