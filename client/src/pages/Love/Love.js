import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Love.css';

function Love() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Go Back</button>
            </div>
            <h1>Love</h1>
            <div>

            </div>
        </div>
    )

}

export default Love;