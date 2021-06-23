import React from 'react'
import Card from '../UI/Card'
import './User.css'

export default function User(props) {
    return (
        <div>
            <Card className ="user">
                <div className="user-desc">
                    <p>{props.name} ({props.age} years old)</p>
                </div>
            </Card>

        </div>
    )
}
