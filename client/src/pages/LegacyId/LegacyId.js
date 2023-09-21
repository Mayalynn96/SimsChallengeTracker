import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate, useParams } from "react-router-dom";
import './LegacyId.css';
import Loading from "../../components/Loading/Loading";

function LegacyId({ authState }) {

    // Adding useNavigate
    const navigate = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
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
    }, [authState, legacyId]);

    const [currentSelection, setCurrentSelection] = useState('allSims');

    const RenderSelection = () => {
        if(currentSelection === "allSims"){
            return (
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
                    } else {
                        return null
                    }
                })}
            </div>
            )
        }
    }

    if (!authState.isLoading && !authState.isLoggedIn) {
        return (
            <main>
                <h1>Please login to see your sims 4 Legacy</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    } else if (authState.isLoggedIn && legacy.name) {
        return (
            <main>
                <div>
                    <h1 style={{ textTransform: 'capitalize' }}>{legacy.name} Legacy</h1>
                    <p>Gender Law: {legacy.genderLaw}</p>
                    <p>Bloodline Law: {legacy.bloodlineLaw}</p>
                    <p>Heir Law: {legacy.heirLaw}</p>
                    <p>Species Law: {legacy.speciesLaw}</p>
                </div>
                <RenderSelection />
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

export default LegacyId;