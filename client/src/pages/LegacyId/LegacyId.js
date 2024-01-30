import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useParams, Outlet } from "react-router-dom";
import './LegacyId.css';
import Loading from "../../components/Loading/Loading";

function LegacyId({ authState }) {
    const [legacy, setLegacy] = useState([]);
    const [legacyPoints, setLegacyPoints] = useState(0);

    const { legacyId } = useParams();

    useEffect(() => {
        // get Legacy if user is logged in
        const getLegacy = async () => {
            if (authState.isLoggedIn) {
                const userLegacy = await API.getLegacyById(legacyId, authState.token)
                setLegacy(userLegacy);
                console.log(userLegacy)
                if(userLegacy.msg){
                    return
                } else {
                    setLegacyPoints(userLegacy.PointsSheet.family)
                }
                return
            }
        };

        getLegacy();
    }, [authState, legacyId]);


    if (legacy.name) {
        return (
            <main>
                <section id='legacyBanner'>
                <h2 style={{ textTransform: 'capitalize' }}>{legacy.name} Legacy</h2>
                <p> {legacyPoints} | Gen {legacy.generation} | {legacy.Sims.length} Sims</p>
                </section>
                <Outlet context={[legacy]} />
            </main>
        )
    } else if(legacy.msg){
        return (
            <main>
                <p>{legacy.msg}</p>
            </main>
        )
    } else {
        return (
            <main>
                <Loading />
            </main>
        )
    }
}

export default LegacyId;