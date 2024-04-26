import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const history = useNavigate();

    const handleLogout = () => {
        // Clear the authentication token from localStorage or sessionStorage
        localStorage.removeItem('token'); // If token is stored in localStorage
        sessionStorage.removeItem('token'); // If token is stored in sessionStorage
        
        // Redirect to the login page or any other desired page
        history('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
