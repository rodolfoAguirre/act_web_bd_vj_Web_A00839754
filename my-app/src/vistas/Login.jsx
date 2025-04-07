import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/home">Entrar</Link>
            <p>Bienvenido, inicia sesión.</p>
        </div>
    );
};

export default Login;
