import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Overview.css';

function Overview() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Change section</button>
            </div>
            <h1>Overview</h1>
            <div>
                <h2>Laws</h2>
                <p>Gender Law: {currentLegacy.genderLaw}</p>
                <p>Bloodline Law: {currentLegacy.bloodlineLaw}</p>
                <p>Heir Law: {currentLegacy.heirLaw}</p>
                <p>Species Law: {currentLegacy.speciesLaw}</p>
            </div>
        </div>
    )

}

export default Overview;