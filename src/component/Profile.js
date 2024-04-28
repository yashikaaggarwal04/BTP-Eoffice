import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('jwtToken'); // Assuming token is stored in localStorage
                const response = await axios.get('http://localhost:8080/api/v1/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (err) {
                setError('Failed to retrieve user data');
            }
        };

        fetchUserProfile();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default UserProfile;
