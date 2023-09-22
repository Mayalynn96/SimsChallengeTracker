import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './Sim.css';

function Sim() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <h3>One Sims</h3>
        </div>
    )

}

export default Sim;