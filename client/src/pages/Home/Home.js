import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Loading from "../../components/Loading/Loading";

function Home({ authState }) {

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    // redirect to login function
    const redirectTo = (destination) => {
        navigate(`/${destination}`);
    }

    if (authState.isLoading) {
        return (
            <main>
                <Loading />
            </main>
        )
    } else if (authState.isLoggedIn) {
        return (
            <main>
                <h1>Welcome {authState.userData.username}</h1>
                <div>
                    <button onClick={() => {redirectTo("legacies/new")}}>New Legacy</button>
                    <button onClick={() => {redirectTo("legacies")}}>All Legacies</button>
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Welcome!</h1>
                <p>The Sims Challenge Tracker for Sims 4 is your ultimate companion for tracking and managing points in the popular Sims 4 Legacy Challenge. This user-friendly web application offers a seamless experience for Simmers of all levels, helping you keep score and stay on top of your Legacy Challenge journey.</p>
                <button onClick={() => {redirectTo("login")}}>login</button>
            </main>
        )
    }
}

export default Home;