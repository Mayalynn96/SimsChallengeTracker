import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate, Outlet } from "react-router-dom";
import './AllLegacies.css';
import Loading from "../../components/Loading/Loading";

function AllLegacies({ authState }) {

    // Adding useNavigate
    const navigate = useNavigate();

    // redirect to login function
    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    const goToLegacy = (id) => {
        navigate(`/legacies/${id}`)
    }

    const [legacies, setLegacies] = useState([])

    useEffect(() => {
        // get legacies if user is logged in
        const getLegacies = async () => {
            if (authState.isLoggedIn) {
                const userLegacies = await API.getAllUserLegacies(authState.token)
                setLegacies(userLegacies);
                return console.log(userLegacies)
            }
        };

        getLegacies();
    }, [authState])


    if (!authState.isLoading && !authState.isLoggedIn) {
        return (
            <main>
                <h1>Please login to see your sims 4 Legacy</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    } else if (authState.isLoggedIn) {
        return (
            <main>
                <h2>Your legacies:</h2>
                <div>
                    <div>
                        <h3>Start a new Legacy</h3>
                        <button>+</button>
                    </div>
                    {legacies.map((legacy, index) => {
                        var currentHeir = "none";

                        legacy.Sims.map(sim => {
                            if (sim.relationToHeir === "Heir") {
                                return currentHeir = sim.firstName + " " + sim.lastName
                            }
                            return "no"
                        })
                        return (
                            <div key={index}>
                                <h3>{legacy.name.toUpperCase()} Legacy</h3>
                                <p>Generation: {legacy.generation}</p>
                                <p>Number of Sims: {legacy.Sims.length}</p>
                                <p>Current Heir: {currentHeir}</p>
                                {legacy.extremeStart && <p>Extreme Start</p>}
                                {legacy.ultraExtremeStart && <p>Ultra Extreme Start</p>}
                                <button onClick={() => { goToLegacy(legacy.id) }}>View</button>
                            </div>
                        )
                    })}
                </div>

                <Outlet />
            </main>
        )
    } else {
        return (
            <main>
                <Loading />
            </main>
        )
    }
}

export default AllLegacies;