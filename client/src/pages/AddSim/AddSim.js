import React, { useState } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import API from '../../utils/API';
import './AddSim.css';

function AddSim({authState}) {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [generationInput, setGenerationInput] = useState("")
    const [genderInput, setGenderInput] = useState("")
    const [eligibilityInput, setEligibilityInput] = useState("")
    const [relationInput, setRelationInput] = useState("")
    const [isAdopted, setIsAdopted] = useState(false)

    const handleChange = (e) => {
        if (e.target.id === "firstNameInput") {
            setFirstNameInput(e.target.value)
        } else if (e.target.id === "lastNameInput") {
            setLastNameInput(e.target.value)
        } else if (e.target.id === "generationInput") {
            setGenerationInput(e.target.value)
        } else if (e.target.name === "eligibilityInput") {
            setEligibilityInput(e.target.value)
        } else if (e.target.name === "genderInput") {
            setGenderInput(e.target.value)
        } else if (e.target.name === "relationInput") {
            setRelationInput(e.target.value)
        } else if (e.target.id === "isAdopted") {
            setIsAdopted(!isAdopted)
        }
    }

    const addSim = async (e) => {
        e.preventDefault()

        var isFounder = false

        if(currentLegacy.Sims.length < 1){
            isFounder = true
        }

        const simObject = {
            "isFounder": isFounder,
            "LegacyId": currentLegacy.id,
            "generation": generationInput,
            "firstName": firstNameInput,
            "lastName": lastNameInput,
            "gender": genderInput,
            "heirStatus": eligibilityInput,
            "species": "Human",
            "isAdopted": isAdopted,
            "relationToHeir": relationInput
        }

        
        const newSim = await API.createSim(simObject, authState.token)
        console.log(newSim)
        if(newSim.data){
            return navigate(`/legacies/${currentLegacy.id}/family`)
        }
    }

    return (
        <div>
            <h3>Add a new Sim</h3>
            <form>
                <label htmlFor='firstNameInput'>First name</label>
                <input type="text" id='firstNameInput' name='firstNameInput' value={firstNameInput} onChange={handleChange}></input>
                <label htmlFor='lastNameInput'>Last name</label>
                <input type="text" id='lastNameInput' name='lastNameInput' value={lastNameInput} onChange={handleChange}></input>
                <label htmlFor='generationInput'>Generation</label>
                <input type="number" min={1} max={10} id='generationInput' name='generationInput' value={generationInput} onChange={handleChange}></input>
                <label htmlFor='isAdopted'>Is Adopted</label>
                <input type="checkbox" id='isAdopted' name='isAdopted' checked={isAdopted} onChange={handleChange}></input>
                <div>
                    <h4>Gender</h4>
                    <input type="radio" id="female" name="genderInput" value="Female" checked={genderInput === "Female"} onChange={handleChange} />
                    <label htmlFor="female">Female</label><br />
                    <input type="radio" id="male" name="genderInput" value="Male" checked={genderInput === "Male"} onChange={handleChange} />
                    <label htmlFor="male">Male</label><br />
                    <input type="radio" id="noneBinary" name="genderInput" value="Non-Binary" checked={genderInput === "Non-Binary"} onChange={handleChange} />
                    <label htmlFor="noneBinary">Non-Binary</label><br />
                    <input type="radio" id="other" name="genderInput" value="Other" checked={genderInput === "Other"} onChange={handleChange} />
                    <label htmlFor="other">Other</label>
                </div>
                <div>
                    <h4>Relation</h4>
                    <input type="radio" id="heir" name="relationInput" value="Heir" checked={relationInput === "Heir"} onChange={handleChange} />
                    <label htmlFor="heir">Heir</label><br />
                    <input type="radio" id="primarySpouse" name="relationInput" value="Primary Spouse" checked={relationInput === "Primary Spouse"} onChange={handleChange} />
                    <label htmlFor="primarySpouse">Primary Spouse</label><br />
                    <input type="radio" id="spouse" name="relationInput" value="Spouse" checked={relationInput === "Spouse"} onChange={handleChange} />
                    <label htmlFor="spouse">Spouse</label><br />
                    <input type="radio" id="child" name="relationInput" value="Child" checked={relationInput === "Child"} onChange={handleChange} />
                    <label htmlFor="child">Child</label>
                </div>
                <div>
                    <h4>Eligibility</h4>
                    <input type="radio" id="eligible" name="eligibilityInput" value="Eligible" checked={eligibilityInput === "Eligible"} onChange={handleChange} />
                    <label htmlFor="eligible">Eligible</label><br />
                    <input type="radio" id="ineligible" name="eligibilityInput" value="Ineligible" checked={eligibilityInput === "Ineligible"} onChange={handleChange} />
                    <label htmlFor="ineligible">Ineligible</label><br />
                </div>
                <button onClick={addSim}>Add</button>
            </form>
        </div>
    )

}

export default AddSim;