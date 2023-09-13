import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './Legacies.css';
import Loading from "../../components/Loading/Loading";

function Legacies({ authState }) {

    // Adding useNavigate
    const navigate = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
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
                <h1>All your sims 4 legacies: </h1>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Please login to see your sims 4 legacies</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    }
}

export default Legacies;