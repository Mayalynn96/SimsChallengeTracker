import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header({ authState, setAuthState }) {
    // Logout funtion
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
    // Adding useNavigate
    const navigate = useNavigate();

    // redirect to legacies function
    const redirectToLegacies = (e) => {
        e.preventDefault();
        navigate("/allLegacies");
    }

    // redirect to Home function
    const redirectToHome = (e) => {
        e.preventDefault();
        navigate("/Home");
    }


    return (
        <header>
            <div>
                <button onClick={redirectToLegacies}>All legacies</button>
            </div>
            <div>
                <h1>Sims Challenge Tracker</h1>
            </div>
            <div>
                {authState.isLoggedIn && <button onClick={handleLogout}>Logout</button>}
                <button onClick={redirectToHome}>Home</button>
            </div>
        </header>
    )
}

export default Header;