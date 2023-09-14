import React, { useState } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";

function Login({ setAuthState }) {
    // All state for login and sign up
    const [usernameInput, setUsernameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [secondPasswordInput, setSecondPasswordInput] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);

    // input handler for each state
    const handleInputChange = (e) => {
        if (e.target.id === "usernameInput") {
            setUsernameInput(e.target.value)
        } else if (e.target.id === "emailInput") {
            setEmailInput(e.target.value)
        } else if (e.target.id === "passwordInput") {
            setPasswordInput(e.target.value)
        } else if (e.target.id === "secondPasswordInput") {
            setSecondPasswordInput(e.target.value)
        }
    }

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    // handles login
    const handleLogin = (e) => {
        e.preventDefault();

        const userObj = {
            login: usernameInput,
            password: passwordInput
        }

        API.login(userObj).then(data => {

            if (data.token) {
                setAuthState({
                    isLoading: false,
                    isLoggedIn: true,
                    userData: data.user,
                    token: data.token,
                    error: null
                })
                localStorage.setItem("token", data.token)
                setUsernameInput("");
                setPasswordInput("")
                navigate("/");
            } else {
                console.log(data)
            }
        }).catch(err => {
            setAuthState({
                isLoading: false,
                isLoggedIn: false,
                userData: null,
                token: null,
                error: err
            })
            console.log(err)
        })
    }

    const handleSignup = (e) => {
        e.preventDefault();

        const userObj = {
            username: usernameInput,
            email: emailInput,
            password: passwordInput,
            secondPassword: secondPasswordInput,
        }

        if (passwordInput !== secondPasswordInput){
            console.log("Passwords don't match")
            return
        }

        API.signup(userObj).then(data => {

            if (data.token) {
                setAuthState({
                    isLoading: false,
                    isLoggedIn: true,
                    userData: data.user,
                    token: data.token,
                    error: null
                })
                localStorage.setItem("token", data.token)
                setUsernameInput("");
                setPasswordInput("")
                navigate("/");
            } else {
                console.log(data)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSwitch = (e) => {
        e.preventDefault();

        if (!isSigningUp) {
            setIsSigningUp(true)
            e.target.textContent = "Login"
        } else {
            setIsSigningUp(false)
            e.target.textContent = "Create Account"
        }


    }

    return (
        <main id="LoginMain">
            <div className="loginBody">
                <div id="loginCard">
                    <form className="loginForm" id="loginForm">
                        {isSigningUp && <input type="text" id="emailInput" placeholder="email" value={emailInput} onChange={handleInputChange} autoComplete='email' /> }
                        <input type="text" id="usernameInput" placeholder="Username" value={usernameInput} onChange={handleInputChange} autoComplete='username' />
                        <input type="password" id="passwordInput" placeholder="Password" value={passwordInput} onChange={handleInputChange} autoComplete='current-password' />
                        {isSigningUp && <input type="password" id="secondPasswordInput" placeholder="secondPassword" value={secondPasswordInput} onChange={handleInputChange} autoComplete='secondPassword' /> }
                        {isSigningUp ? <button onClick={handleSignup}>Sign up</button> : <button onClick={handleLogin} >Login</button>}
                    </form>
                    <div id="signUpCard">
                        {isSigningUp ? <p>Already have an account? Login now!</p> : <p>No acount yet? Come join us!</p>}
                        <button onClick={handleSwitch}>Create Account</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;