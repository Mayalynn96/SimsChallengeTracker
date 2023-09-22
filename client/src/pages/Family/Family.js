import React from 'react';
import { useNavigate, useOutletContext, Outlet } from "react-router-dom";
import './Family.css';

function Family() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Change section</button>
            </div>
            <div id='familyBanner'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}/family/addSim`) }}>+</button>
                <h1>Family</h1>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}/family`) }}>All</button>
            </div>
            <Outlet context={[currentLegacy]} />
        </div>
    )

}

export default Family;