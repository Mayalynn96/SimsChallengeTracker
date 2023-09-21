import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Family.css';

function Family() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <main>
            <button onClick={() => { navigate(`/legacies/${currentLegacy.id}`) }}>Change section</button>
            <h1>Family</h1>
            <div>

            </div>
        </main>
    )

}

export default Family;