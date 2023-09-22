import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './AllSims.css';

function AllSims() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    const generations = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    return (
        <div>
            <h3>All Sims</h3>
            {generations.map(gen => {
            if(gen <= currentLegacy.generation){
                return (
                    <div key={gen}>
                        <h4>Genreration {gen}</h4>
                        {currentLegacy.Sims.map(sim => {
                            if (sim.generation === gen) {
                                return (
                                    <div key={sim.id}>
                                        <p>{sim.firstName} {sim.lastName}</p>
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                )
            } else {
                return null
            }
        })}
        </div>
    )

}

export default AllSims;