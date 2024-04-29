// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const token = localStorage.getItem('jwtToken'); // Assuming token is stored in localStorage
//                 const response = await axios.get('http://localhost:8080/api/v1/users', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setUser(response.data);
//             } catch (err) {
//                 setError('Failed to retrieve user data');
//             }
//         };

//         fetchUserProfile();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>User Profile</h1>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//             {/* Add more fields as needed */}
//         </div>
//     );
// };

// export default UserProfile;

import React, { useEffect, useState } from 'react';


const Profile = () => {

    const [usercred, setUserCred] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const userdeatils = async () => {
        const response = await fetch("http://localhost:8080/api/v1/users", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("usertoken")
            },
        });
        const json = await response.json();
        console.log(json)
        setUserCred(json);
        setUserName(json[0].fullName);
        setUserEmail(json[0].email);
    };

    useEffect(() => {
        userdeatils();
    }, []);


    // console.log(usercred.users[0].fullName)
    console.log(usercred)
    console.log(userName)
    console.log(userEmail)
    // console.log(usercred[0].fullName)
    return (
        <>

            <div>Profile</div>
            <div>{userName}</div>
            <div>{userEmail}</div>
            {/* <div>Profile</div> */}
        </>
    )
}

export default Profile