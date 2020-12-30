import React from "react"
import { useHistory } from "react-router-dom"
import { AppLogo } from "../../../assets"
import "./header.scss"

const Header = () => {
    const history = useHistory()
    return (
        <div className="header-wrapper">
            <div className="logo-app">
                <img src={AppLogo} className="app-logo" alt="appLogo"></img>
            </div>
            <p className="menu-item" onClick={() => history.push("/login")}>
                Logout
            </p>
        </div>
    )
}

export default Header
