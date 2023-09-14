import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { useNavigate, useParams } from "react-router-dom";
import './Legacy.css';
import Loading from "../../components/Loading/Loading";

function Legacy({ authState }) {

    // Adding useNavigate
    const navigate = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    const [Legacy, setLegacy] = useState([])

    useEffect(() => {
        // get Legacy if user is logged in
        const getLegacy = async () => {
            if (authState.isLoggedIn) {
                const userLegacy = await API.getAllUserLegacy(authState.token)
                setLegacy(userLegacy);
                return console.log(userLegacy)
            }
        };

        // getLegacy();
    }, [authState])

    const LegacyId = () => {
        const { legacyId } = useParams();

        return (
            <>
                <h2>LegacyId: {legacyId}</h2>
            </>
        );
    };

    if (authState.isLoading) {
        return (
            <main>
                <Loading />
            </main>
        )
    } else if (authState.isLoggedIn) {

        return (
            <main>
                <h1>Legacy:</h1>
                <LegacyId />
            </main>
        )
    } else {
        return (
            <main>
                <h1>Please login to see your sims 4 Legacy</h1>
                <button onClick={redirectToLogin}>login</button>
            </main>
        )
    }
}

export default Legacy;