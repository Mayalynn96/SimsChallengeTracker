import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import './AllSims.css';

function AllSims() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    return (
        <div>
            <h3>All Sims</h3>
            <table>
                <thead>
                    <tr>
                        <th>Generation</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Lifestage</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {currentLegacy.Sims.map((sim, index) => {
                        return (
                            <tr key={index} className='simRow' onClick={() => {navigate(`/legacies/${currentLegacy.id}/family/${sim.id}`)}}>
                                <td>{sim.generation}</td>
                                <td>{sim.firstName}</td>
                                <td>{sim.lastName}</td>
                                <td>{sim.lifeStage}</td>
                                <td>{sim.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default AllSims;