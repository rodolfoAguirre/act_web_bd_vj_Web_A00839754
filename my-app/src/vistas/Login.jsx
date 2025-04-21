import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            const result = await response.json();

            if (result.isLogin) {
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/home');
            } else {
                alert('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al conectar con el servidor');
        }
    };


    return (
        <div style={{ padding: '2rem' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <label>Contraseña:</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>Iniciar sesión</button>
            </form>
        </div>
    );
}

export default Login;
