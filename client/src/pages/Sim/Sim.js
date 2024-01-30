import React, { useEffect } from 'react';
import { useNavigate, useOutletContext, useParams  } from "react-router-dom";
import './Sim.css';

function Sim() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    const {legacyId, simId} = useParams();

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

    return (
        <div>
            <h3>One Sims</h3>
            <p>Sims Id: {simId}</p>
        </div>
    )

}

export default Sim;