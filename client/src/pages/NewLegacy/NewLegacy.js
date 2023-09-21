import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import './NewLegacy.css';
import Loading from "../../components/Loading/Loading";

function NewLegacy({ authState }) {
    const [nameInput, setNameInput] = useState("")
    const [startTypeInput, setStartTypeInput] = useState("")
    const [lotValueInput, setLotValueInput] = useState("")
    const [genderLawInput, setGenderLawInput] = useState("")
    const [bloodlineLawInput, setBloodlineLawInput] = useState("")
    const [heirLawInput, setHeirLawInput] = useState("")
    const [speciesLawInput, setSpeciesLawInput] = useState("")

    // input handler for each state
    const handleInputChange = (e) => {
        if (e.target.id === "nameInput") {
            setNameInput(e.target.value)
        } else if (e.target.name === "startType") {
            setStartTypeInput(e.target.value)
        } else if (e.target.name === "lotValueInput") {
            setLotValueInput(e.target.value)
        } else if (e.target.name === "genderLaw") {
            setGenderLawInput(e.target.value)
        } else if (e.target.name === "bloodlineLaw") {
            setBloodlineLawInput(e.target.value)
        } else if (e.target.name === "heirLaw") {
            setHeirLawInput(e.target.value)
        } else if (e.target.name === "spieciesLaw") {
            setSpeciesLawInput(e.target.value)
        }
    }

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        var extremeStart = false;
        var ultraExtremeStart = false;

        if (startTypeInput === "extreme") {
            extremeStart = true;
        }

        if (startTypeInput === "ultraExtreme") {
            ultraExtremeStart = true;
        }


        const legacyObject = {
            "name": nameInput,
            "extremeStart": extremeStart,
            "ultraExtremeStart": ultraExtremeStart,
            "lotValue": lotValueInput,
            "genderLaw": genderLawInput,
            "bloodlineLaw": bloodlineLawInput,
            "heirLaw": heirLawInput,
            "speciesLaw": speciesLawInput
        }

        const newLegacy = await API.createLegacy(legacyObject, authState.token)

        navigate(`/legacies/${newLegacy.data.id}`)
    }

    return (
        <div>
            <h1>Add a new Legacy</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="nameInput">Legacy Name</label>
                <input type='text' id="nameInput" name='nameInput' value={nameInput} onChange={handleInputChange} />
                <label htmlFor="lotValueInput">Lot Value</label>
                <input type='number' id="lotValueInput" name='lotValueInput' value={lotValueInput} onChange={handleInputChange} />
                <div>
                    <h3>Start Type</h3>
                    <input type="radio" id="normal" name="startType" value="normal" checked={startTypeInput === "normal"} onChange={handleInputChange} />
                    <label htmlFor="normal">Normal Start</label><br />
                    <input type="radio" id="extreme" name="startType" value="extreme" checked={startTypeInput === "extreme"} onChange={handleInputChange} />
                    <label htmlFor="extreme">Extreme Start</label><br />
                    <input type="radio" id="ultraExtreme" name="startType" value="ultraExtreme" checked={startTypeInput === "ultraExtreme"} onChange={handleInputChange} />
                    <label htmlFor="ultraExtreme">Ultra Extreme Start</label>
                </div>
                <div>
                    <h3>Gender Law</h3>
                    <input type='radio' id='strictMatriarchy' name='genderLaw' value="Strict Matriarchy" checked={genderLawInput === "Strict Matriarchy"} onChange={handleInputChange} />
                    <label htmlFor="strictMatriarchy">Strict Matriarchy</label><br />
                    <input type='radio' id='strictPatriarchy' name='genderLaw' value="Strict Patriarchy" checked={genderLawInput === "Strict Patriarchy"} onChange={handleInputChange} />
                    <label htmlFor="strictPatriarchy">Strict Patriarchy</label><br />
                    <input type='radio' id='strictEquality' name='genderLaw' value="Strict Equality" checked={genderLawInput === "Strict Equality"} onChange={handleInputChange} />
                    <label htmlFor="strictEquality">Strict Equality</label><br />
                    <input type='radio' id='matriarchy' name='genderLaw' value="Matriarchy" checked={genderLawInput === "Matriarchy"} onChange={handleInputChange} />
                    <label htmlFor="matriarchy">Matriarchy</label><br />
                    <input type='radio' id='patriarchy' name='genderLaw' value="Patriarchy" checked={genderLawInput === "Patriarchy"} onChange={handleInputChange} />
                    <label htmlFor="patriarchy">Patriarchy</label><br />
                    <input type='radio' id='equality' name='genderLaw' value="Equality" checked={genderLawInput === "Equality"} onChange={handleInputChange} />
                    <label htmlFor="equality">Equality</label>
                </div>
                <div>
                    <h3>Bloodline Law</h3>
                    <input type='radio' id='strictTraditional' name='bloodlineLaw' value="Strict Traditional" checked={bloodlineLawInput === "Strict Traditional"} onChange={handleInputChange} />
                    <label htmlFor="strictTraditional">Strict Traditional</label><br />
                    <input type='radio' id='strictFoster' name='bloodlineLaw' value="Strict Foster" checked={bloodlineLawInput === "Strict Foster"} onChange={handleInputChange} />
                    <label htmlFor="strictFoster">Strict Foster</label><br />
                    <input type='radio' id='traditional' name='bloodlineLaw' value="Traditional" checked={bloodlineLawInput === "Traditional"} onChange={handleInputChange} />
                    <label htmlFor="traditional">Traditional</label><br />
                    <input type='radio' id='foster' name='bloodlineLaw' value="Foster" checked={bloodlineLawInput === "Foster"} onChange={handleInputChange} />
                    <label htmlFor="foster">Foster</label><br />
                    <input type='radio' id='modern' name='bloodlineLaw' value="Modern" checked={bloodlineLawInput === "Modern"} onChange={handleInputChange} />
                    <label htmlFor="modern">Modern</label>
                </div>
                <div>
                    <h3>Heir Law</h3>
                    <input type='radio' id='firstBorn' name='heirLaw' value="First Born" checked={heirLawInput === "First Born"} onChange={handleInputChange} />
                    <label htmlFor="firstBorn">First Born</label><br />
                    <input type='radio' id='lastBorn' name='heirLaw' value="Last Born" checked={heirLawInput === "Last Born"} onChange={handleInputChange} />
                    <label htmlFor="lastBorn">Last Born</label><br />
                    <input type='radio' id='random' name='heirLaw' value="Random" checked={heirLawInput === "Random"} onChange={handleInputChange} />
                    <label htmlFor="random">Random</label><br />
                    <input type='radio' id='democracy' name='heirLaw' value="Democracy" checked={heirLawInput === "Democracy"} onChange={handleInputChange} />
                    <label htmlFor="democracy">Democracy</label><br />
                    <input type='radio' id='livingWill' name='heirLaw' value="Living Will" checked={heirLawInput === "Living Will"} onChange={handleInputChange} />
                    <label htmlFor="livingWill">Living Will</label><br />
                    <input type='radio' id='merit' name='heirLaw' value="Merit" checked={heirLawInput === "Merit"} onChange={handleInputChange} />
                    <label htmlFor="merit">Merit</label><br />
                    <input type='radio' id='strength' name='heirLaw' value="Strength" checked={heirLawInput === "Strength"} onChange={handleInputChange} />
                    <label htmlFor="strength">Strength</label><br />
                    <input type='radio' id='exemplar' name='heirLaw' value="Exemplar" checked={heirLawInput === "Exemplar"} onChange={handleInputChange} />
                    <label htmlFor="exemplar">Exemplar</label><br />
                    <input type='radio' id='magicalBloodline' name='heirLaw' value="Magical Bloodline" checked={heirLawInput === "Magical Bloodline"} onChange={handleInputChange} />
                    <label htmlFor="magicalBloodline">Magical Bloodline</label><br />
                    <input type='radio' id='magicalStrength' name='heirLaw' value="Magical Strength" checked={heirLawInput === "Magical Strength"} onChange={handleInputChange} />
                    <label htmlFor="magicalStrength">Magical Strength</label>
                </div>
                <div>
                    <h3>Species Law</h3>
                    <input type='radio' id='xenoarchy' name='spieciesLaw' value="Xenoarchy" checked={speciesLawInput === "Xenoarchy"} onChange={handleInputChange} />
                    <label htmlFor="xenoarchy">Xenoarchy</label><br />
                    <input type='radio' id='xenophobic' name='spieciesLaw' value="Xenophobic" checked={speciesLawInput === "Xenophobic"} onChange={handleInputChange} />
                    <label htmlFor="xenophobic">Xenophobic</label><br />
                    <input type='radio' id='brood' name='spieciesLaw' value="Brood" checked={speciesLawInput === "Brood"} onChange={handleInputChange} />
                    <label htmlFor="brood">Brood</label><br />
                    <input type='radio' id='tolerant' name='spieciesLaw' value="Tolerant" checked={speciesLawInput === "Tolerant"} onChange={handleInputChange} />
                    <label htmlFor="tolerant">Tolerant</label>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default NewLegacy;