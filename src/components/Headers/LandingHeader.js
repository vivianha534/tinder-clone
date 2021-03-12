import React from 'react'
import "./LandingHeader.css"
import AuthButton from "../Authentication/AuthButton"

const LandingHeader = () => {
    return (
        <div className="header">
            <img 
                className="headerLogo"
                src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
                alt = "tinder logo"
            />
            <AuthButton type="login" />
        </div>
    )
}

export default LandingHeader
