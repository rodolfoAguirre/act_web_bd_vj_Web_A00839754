import React from "react";
import "./App.css";
import Inicial from "./vistas/Inicial.jsx";
import Login from "./vistas/Login.jsx";
import Profile from "./vistas/Profile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Inicial />} />
                <Route path="/user/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
