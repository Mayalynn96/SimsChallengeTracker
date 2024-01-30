import React, { useState } from 'react';
import { useNavigate, useOutletContext, Outlet } from "react-router-dom";
import './Family.css';

function Family() {
    const [currentLegacy] = useOutletContext()
    const [buttonText, setButtonText] = useState("Add Sim")

    // Adding useNavigate
    const navigate = useNavigate();

    const addSim = () => {
        if(buttonText === "Add Sim"){
            navigate(`/legacies/${currentLegacy.id}/family/addSim`);
            setButtonText("All Sims")
        } else {
            navigate(`/legacies/${currentLegacy.id}/family`);
            setButtonText("Add Sim")
        }
        

    }

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Go Back</button>
                <button onClick={addSim}>{buttonText}</button>
            </div>
            <div id='familyBanner'>
                <h1>Family</h1>
            </div>
            <Outlet context={[currentLegacy]} />
        </div>
    )

}

export default Family;