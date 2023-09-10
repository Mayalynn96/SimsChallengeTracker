import React, { useState } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home({ authState, setAuthState }) {
    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token")

        setAuthState({
            isLoading: false,
            isLoggedIn: false,
            userData: null,
            token: null,
            error: null,
        })
    }

    if (authState.isLoading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    } else if (authState.isLoggedIn) {
        return (
            <main>
                <h1>Welcome Back {authState.userData.username}</h1>
                <button onClick={handleLogout}>Logout</button>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Welcome!</h1>
                <a href="/login" className='LoginBtn'>Login</a>
            </main>
        )
    }
}

export default Home;