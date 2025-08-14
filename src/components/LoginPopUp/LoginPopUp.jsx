import React, { useState } from 'react'
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div className="login-popup">
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> :
                        <input type="text" name="" id="" placeholder="your name" required />}
                    <input type="email" name="" id="" placeholder="your email" required />
                    <input type="password" name="" id="" placeholder="password" required />
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia.</p>
                </div>
                {currentState === "Login" ?
                    <p>Not yet registered? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :
                    <p>Already have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopUp