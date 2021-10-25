import Button from "./Button"
import { useState } from "react"
const Login = ({Name,onName}) => {
const [userName, setUserName] = useState('')
    return (
        <div>
            <Button text={Name?"":"Login"}
                color='blue'
                onClick={onName}
            />
            <form>
                <label>UserName: </label>
                <input type="text"
                 placeholder="add your username"
                 value={userName}
                 onChange={(e)=>
                 setUserName(e.target.value)}>
                </input>
                <Button type="submit" text="add"/>
                {/* <input type='text'  */}
                {/* placeholder='Add task' */}
                {/* // value={text} */}
            </form>
        </div>
    )
}

export default Login
