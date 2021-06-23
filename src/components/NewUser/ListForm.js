import React, {useState} from 'react'
import './ListForm.css'
import ErrorModal from '../UI/Error.js'

export default function ListForm(props) {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState();

    const nameChangeHandler = e =>{
        setEnteredName(e.target.value)
    }

    const ageChangeHandler = e =>{
        setEnteredAge(e.target.value)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const userData = {
            name: enteredName, 
            age: enteredAge
        }

        console.log(userData)

        setEnteredName('')
        setEnteredAge('')

        if (userData.name.trim().length === 0 || userData.age.trim().length === 0) {
            setIsValid(false);

            setError({
                title: 'Invalid Input',
                message: "Please enter a valid name & age (non-empty values)"
            })
            console.log("invalid username or age, empty values")
            return;
        }

        if((userData.age > 0) && (userData.age < 150)){
            setIsValid(true)

            //passing to parent comp
            props.onSaveUserData(userData)
        }else{
            console.log("invalid age")
            setIsValid(false)

            setError({
                title: 'Invalid Age',
                message: "Please enter a valid age (>0)"
            })
            return;

        }
        
    }

    const errorHandler = () => {
        setError(null);
        // pass this on to the ErrorModal
    }


    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

        <form onSubmit ={onSubmitHandler}>
            <div className={`new-users ${!isValid ? 'invalid' : ''}`}>
                <div className="new-user">
                    <label>Username</label>
                    <input type="text" value={enteredName}  onChange={nameChangeHandler}/>
                </div>

                <div className="new-user">
                    <label>Age</label>
                    <input type="number" value={enteredAge}  onChange={ageChangeHandler}/>
                </div>

                <div className="new-user-button">
                    <button type="submit">Add User</button>
                </div>

            </div>
        </form>
        </>
    )
}
