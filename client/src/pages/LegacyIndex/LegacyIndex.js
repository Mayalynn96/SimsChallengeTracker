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
                        <h3>Family {currentLegacy.PointsSheet.family}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/creative`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Creative {currentLegacy.PointsSheet.creative}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/fortune`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Fortune {currentLegacy.PointsSheet.fortune}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/love`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Love {currentLegacy.PointsSheet.love}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/knowledge`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Knowledge {currentLegacy.PointsSheet.knowledge}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/athletic`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Athletic {currentLegacy.PointsSheet.athletic}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/nature`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Nature {currentLegacy.PointsSheet.nature}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/food`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Food {currentLegacy.PointsSheet.food}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/popularity`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Popularity {currentLegacy.PointsSheet.popularity}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/deviance`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Deviance {currentLegacy.PointsSheet.deviance}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/penalties`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Penalties {currentLegacy.PointsSheet.penalties}</h3>
                    </div>
                    <div onClick={() => {navigate(`/legacies/${currentLegacy.id}/bonus`)}}>
                        <img src={QuestionMark} className='legacyIndexImg' alt='QuestionMark'/>
                        <h3>Bonus {currentLegacy.PointsSheet.bonus}</h3>
                    </div>
                </div>
            </main>
        )

}

export default LegacyIndex;