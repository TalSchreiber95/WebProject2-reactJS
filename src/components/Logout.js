import Button from "./Button"
import { useState } from "react"

const Logout = ({ onLogout, onAddUser, onName, OnLocation }) => {
    const [userName, setUserName] = useState('')
    const [local,setlocal]=useState('')
    const LogoutClick = (e) => {
        e.preventDefault()
        onAddUser()
        onName(userName)
        OnLocation(local)
    }
    return (
        <div>
            <form onSubmit={LogoutClick}>
                <input
                    value=''
                    hidden
                    onChange={(e) =>
                        setUserName(e.target.value)}
                />
                <input
                    hidden
                    value='NoneLocation'
                    onChange={(e) =>
                        setlocal(e.target.value)}

                />
                <Button
                    text='Logout'
                    style={{ backgroundColor: "green" }}
                    className='btn btn-block'
                    onClick={onLogout}
                />
            </form>
        </div>
    )
}

export default Logout
