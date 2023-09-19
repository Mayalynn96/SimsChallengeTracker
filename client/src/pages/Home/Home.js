import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Loading from "../../components/Loading/Loading";

function Home({ authState }) {

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    // redirect to login function
    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    // redirect to legacies function
    const redirectToLegacies = (e) => {
        e.preventDefault();

        navigate("/allLegacies");
    }

    const [legacies, setLegacies] = useState([])

    useEffect(() => {
        // get legacies if user is logged in
        const getLegacies = async () => {
            if(authState.isLoggedIn){
                const userLegacies = await API.getUserLegacies(3, authState.token)
                setLegacies(userLegacies);
                return console.log(userLegacies)
            }
        };

        getLegacies();
    }, [authState])

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
                    <h2>Your Legacies</h2>
                    {legacies.map((legacy, index) => {
                        return (
                            <div key={index}>
                                <h3>{legacy.name.toUpperCase()} Legacy</h3>
                                <p>Generation: {legacy.generation}</p>
                                <p>Number of Sims: {legacy.Sims.length}</p>
                                <button>View</button>
                            </div>
                        )
                    })}
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