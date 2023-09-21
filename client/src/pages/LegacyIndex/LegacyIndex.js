import React from 'react';
import { useNavigate, useOutletContext  } from "react-router-dom";
import './LegacyIndex.css';
import QuestionMark from './questionMark.png'

function LegacyIndex() {
    const [currentLegacy] = useOutletContext()

    // Adding useNavigate
    const navigate = useNavigate();

        return (
            <main>
                <h2>Select One</h2>
                <div id='legacyIndexContainer'>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/overview`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Overview</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/family`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Family</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Creative</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Fortune</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Love</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Knowledge</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Athletic</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Nature</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Food</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Popularity</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Deviance</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Penalties</h3>
                    </div>
                    <div>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Bonus</h3>
                    </div>
                </div>
            </main>
        )

}

export default LegacyIndex;