import Button from "./Button"
const Login = ({onLogin}) => {
    return (
        <div>
            <Button text={"Login"}
                color='blue'
                className='btn btn-block'
                onClick={onLogin}
            />
        </div>
    )
}

export default Login
