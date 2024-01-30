import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Nature.css';

function Nature() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Go Back</button>
            </div>
            <h1>Nature</h1>
            <div>

            </div>
        </div>
    )

}

export default Nature;