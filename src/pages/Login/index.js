import React from "react"
import { useHistory } from "react-router-dom"
import { LoginBg } from "../../assets"
import { Input, Button, Gap, Link } from "../../components"

function Login() {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="bgImage"></img>
            </div>
            <div className="right">
                <p className="title-text">Login</p>
                <Input label="Email" type="email" placeholder="Email" />
                <Gap height={16} />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                />
                <Gap height={30} />
                <Button label="Login" onClick={() => history.push("/")} />
                <Gap height={30} />
                <Link
                    title="Register Account"
                    onClick={() => history.push("/register")}
                />
            </div>
        </div>
    )
}

export default Login
