import React, { useState } from 'react';
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import Boton from "../components/boton.jsx";
import Nav from "./Nav.jsx";

const Inicial = () => {
    const [count, setCount] = useState(0);
    const msg = () => alert("Hola, le diste click en el boton 1");

    return (
        <>
            <Nav />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <Boton texto={"boton 1"} />
                <Boton texto={"boton 2"} />
                <Boton texto={"boton 3"} onClick={msg} />
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default Inicial;
