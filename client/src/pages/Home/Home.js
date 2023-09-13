import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Loading from "../../components/Loading/Loading";

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

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    const redirectToLegacies = (e) => {
        e.preventDefault();

        navigate("/sims4legacies");
    }

    const getLegacies = async () => {
        const userLegacies = await API.getUserLegacies(3, authState.token)
        return console.log(userLegacies)
    };


    if (authState.isLoading) {
        return (
            <main>
                <Loading />
            </main>
        )
    } else if (authState.isLoggedIn) {
        getLegacies();
        return (
            <main>
                <h1>Welcome Back {authState.userData.username}</h1>
                <button onClick={handleLogout}>Logout</button>
                <div>
                    <h2>Your Legacies</h2>
                    <button onClick={redirectToLegacies}>See All</button>
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Welcome!</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    }
}

export default Home;