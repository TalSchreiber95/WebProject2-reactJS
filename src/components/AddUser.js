import React from 'react'
import Button from "./Button"
import { useState } from "react"

const AddUser = ({onLogin, onAddUser,onName,OnLocation }) => {
    const [userName, setUserName] = useState('')
    const [local,setlocal]=useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!userName) {
            alert("Add User Please!")
            return
        }
        console.log(userName)
        onAddUser()
        onName(userName)
        OnLocation(local)
    }
    return (
        <div>
            <Button type="button" color='red' 
                text="Cancel login"
                onClick={onLogin} />
            <form className='add-form' onSubmit={onSubmit}>
                <label>UserName: </label>
                <input
                    type="text"
                    placeholder="add your username"
                    value={userName}
                    onChange={(e) =>
                        setUserName(e.target.value)}
                />
                <br/>
                <label>Location: </label>
                <input
                 type="text"
                    placeholder="add your location"
                    value={local}
                    onChange={(e) =>
                        setlocal(e.target.value)}

                />
                <Button type="submit" text="add" />
            </form>
        </div>
    )
}

export default AddUser
