import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './iitlogo.png'; // Ensure the path to the logo is correct
import iitKgpBackground from './download (1).jpeg';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e, req, res) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', { email, password });
            const { jwtToken, tokenObject } = response.data;
            // localStorage.setItem('jwtToken', jwtToken);
            console.log('Token:', jwtToken);
            console.log('User:', tokenObject);
            // Navigate to homepage upon successful login
            localStorage.setItem("usertoken", response.data.jwtToken);
            history('/home');
        } catch (err) {
            setError(err.response.message);
            alert('Login failed. Please check your credentials and try again.');
        }
    };

    const handleForgotPassword = () => {
        // Navigate to forgot password page
        history('/forgot-password');
    };

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            height: '100vh', 
            background: `url(${iitKgpBackground}) no-repeat center center`, 
            backgroundSize: 'cover'
        }}>
            <header style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%', 
                color: 'white', 
                padding: '10px 20px', 
                backgroundColor: '#0055b7', 
                fontSize: '20px'
            }}>
                <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
                INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR
            </header>
            <div style={{
                backgroundColor: '#0055b7', 
                padding: '20px', 
                borderRadius: '8px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                marginTop: '170px'
            }}>
                <h2 style={{ color: '#ffffff' }}>Login</h2>
                <form onSubmit={handleSubmit} style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    width: '300px', 
                    gap: '10px'
                }}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px' }} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px' }} />
                    <button type="submit" style={{
                        width: '100%', 
                        padding: '10px', 
                        backgroundColor: '#007acc', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        fontSize: '16px'
                    }}>Login</button>
                    <button onClick={handleForgotPassword} style={{
                        width: '100%', 
                        padding: '10px', 
                        backgroundColor: '#0055b7', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        fontSize: '16px', 
                        marginTop: '10px'
                    }}>Forgot Password?</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;