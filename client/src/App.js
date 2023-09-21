import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import API from './utils/API';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Legacies from "./pages/Legacy/Legacies";
import NotFound from "./components/NotFound/NotFound";
import './App.css';
import Header from "./components/Header/Header";
import NewLegacy from "./pages/NewLegacy/NewLegacy";
import LegacyId from "./pages/LegacyId/LegacyId";
import AllLegacies from "./pages/AllLegacies/AllLegacies";

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
    <Router>
      <Header authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route index element={<Home authState={authState} />} />
        <Route path="home" element={<Home authState={authState} />} />
        <Route path="login" element={<Login setAuthState={setAuthState} />} />
        <Route path="legacies" element={<Legacies authState={authState} />}>
          <Route index element={<AllLegacies authState={authState} /> }/>
          <Route path=":legacyId" element={<LegacyId authState={authState} />} />
          <Route path="new" element={<NewLegacy authState={authState} />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
