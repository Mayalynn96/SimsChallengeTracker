import React from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import './Legacies.css';
import Loading from "../../components/Loading/Loading";

function Legacies({ authState }) {
    // Adding useNavigate
    const navigate = useNavigate();

    // redirect to login function
    const redirectToLogin = () => {
        navigate("/login");
    }

    if (!authState.isLoading && !authState.isLoggedIn) {
        return (
            <main>
                {redirectToLogin()}
            </main>
        )
    } else if (authState.isLoggedIn) {
        return (
            <main>
                <Outlet />
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

export default Legacies;