import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Bonus.css';

function Bonus() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <div id='allLegacyBtn'>
                <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Go Back</button>
            </div>
            <h1>Bonus</h1>
            <div>

            </div>
        </div>
    )

}

export default Bonus;