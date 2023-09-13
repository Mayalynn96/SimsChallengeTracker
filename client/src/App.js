import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import API from './utils/API';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Legacies from "./pages/Legacies/Legacies";
import './App.css';

function App() {
  const [authState, setAuthState] = useState({
    isLoading: true,
    isLoggedIn: false,
    userData: null,
    token: null,
    error: null
  })

  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      API.isValidToken(savedToken).then(tokenData => {
        if (tokenData.isValid) {
          setAuthState({
            isLoading: false,
            isLoggedIn: true,
            userData: tokenData.user,
            token: savedToken,
            error: null
          })
        } else {
          localStorage.removeItem("token")
          setAuthState({
            isLoading: false,
            isLoggedIn: false,
            userData: null,
            token: null,
            error: "Invalid Token"
          })
        }
      })
    } else {
      setAuthState({
        isLoading: false,
        isLoggedIn: false,
        userData: null,
        token: null,
        error: "No Token"
      })
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home authState={authState} setAuthState={setAuthState} />} />
        <Route path="/home" element={<Home authState={authState} setAuthState={setAuthState} />} />
        <Route path="/sims4legacies" element={<Legacies authState={authState}/>} />
        <Route path="/login" element={<Login setAuthState={setAuthState} />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
