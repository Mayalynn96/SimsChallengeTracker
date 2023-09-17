import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate, useParams } from "react-router-dom";
import './Legacy.css';
import Loading from "../../components/Loading/Loading";

function Legacy({ authState }) {

    // Adding useNavigate
    const navigate = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    // redirect to legacies function
    const redirectToLegacies = (e) => {
        e.preventDefault();

        navigate("/sims4legacies");
    }

    const [legacy, setLegacy] = useState([]);

    const { legacyId } = useParams();

    useEffect(() => {

        // get Legacy if user is logged in
        const getLegacy = async () => {
            if (authState.isLoggedIn) {
                const userLegacy = await API.getLegacyById(legacyId, authState.token)
                setLegacy(userLegacy);
                return console.log(userLegacy)
            }
        };

        getLegacy();
    }, [authState]);

    if (authState.isLoading) {
        return (
            <main>
                <Loading />
            </main>
        )
    } else if (authState.isLoggedIn && legacy.Sims) {

        return (
            <main>
                <h1 style={{ textTransform: 'capitalize' }}>{legacy.name} Legacy</h1>
                <button onClick={redirectToLegacies}>Return to all legacies</button>
                <button>Add Sim</button>
                <div>
                    <h2>Generation 1</h2>
                    {legacy.Sims.map(sim => {
                        if (sim.generation === 1) {
                            return (
                                <div key={sim.id} className={sim.relationToHeir}>
                                    <h3>{sim.firstName} {sim.lastName}</h3>
                                    <p>{sim.gender}</p>
                                    <p>Heir Status: {sim.heirStatus}</p>
                                    <p>{sim.species}</p>
                                    <p>Relation: {sim.relationToHeir}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <h1>Please login to see your sims 4 Legacy</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    }
}

export default Legacy;