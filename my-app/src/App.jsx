import React from "react";
import "./App.css";
import Inicial from "./vistas/Inicial.jsx";
import Login from "./vistas/Login.jsx";
import Profile from "./vistas/Profile.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function AppWrapper() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {!isLoginPage && <ResponsiveAppBar />}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Inicial />} />
                <Route path="/user/profile" element={<Profile />} />
                <Route path="*" element={<Profile />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    );
}

export default App;
